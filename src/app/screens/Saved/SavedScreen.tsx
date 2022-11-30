import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  ListRenderItem,
  StyleSheet,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Props} from '@navigation/InjectInterface';
import {useHookSaved} from './hookScreen';
import {ArtEntity} from '@presenter/domain/entity/art.entity';
import Card from '@components/Card/Card';
import {Text} from 'react-native-ui-lib';

const SavedScreen: React.FC<Props> = () => {
  const {data, loading, fetchAsyncData} = useHookSaved();

  const renderItem: ListRenderItem<ArtEntity> = ({item}) => (
    <Card item={item} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => `${item.id}-${item.artist_display}`}
        style={{flex: 1}}
        refreshing={loading}
        onRefresh={fetchAsyncData}
        ListEmptyComponent={
          <Text center marginT-24>
            List Empty
          </Text>
        }
      />
      {loading && <ActivityIndicator size={48} color="black" />}
    </SafeAreaView>
  );
};

export default SavedScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
