import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  ListRenderItem,
  StyleSheet,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Props} from '@navigation/InjectInterface';
import {useHookHome} from './hookScreen';
import {ArtEntity} from '@presenter/domain/entity/art.entity';
import Card from '@components/Card/Card';

const HomeScreen: React.FC<Props> = () => {
  const {data, refreshing, isFetching, onRefresh, handleGetMore} =
    useHookHome();

  const renderItem: ListRenderItem<ArtEntity> = ({item}) => (
    <Card item={item} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => `${item.id}-${item.artist_display}`}
        refreshing={refreshing}
        onRefresh={onRefresh}
        onEndReachedThreshold={0.2}
        style={{flex: 1}}
        onEndReached={data?.length > 10 ? handleGetMore : null}
      />
      {isFetching && <ActivityIndicator size={48} color="black" />}
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
