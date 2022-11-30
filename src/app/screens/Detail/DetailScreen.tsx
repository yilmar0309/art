import React from 'react';
import {ActivityIndicator, Image, ScrollView, StyleSheet} from 'react-native';
import {Text, View, Button} from 'react-native-ui-lib';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Props} from '@navigation/InjectInterface';
import {useHookDetail} from './hookScreen';
import Animated from 'react-native-reanimated';

const DetailScreen: React.FC<Props> = props => {
  const {
    data,
    isFetching,
    loadingImage,
    animatedStyles,
    showBtnAddToFavorite,
    setloadingImage,
    showAnimated,
    handleSaveArtToFavorite,
    handleRemoveArtToFavorite,
  } = useHookDetail(props);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{paddingHorizontal: 8}}>
        {loadingImage && data?.image_id && (
          <ActivityIndicator size={40} color="black" style={styles.indicator} />
        )}
        {data?.image_id && (
          <Animated.View style={animatedStyles}>
            <Image
              source={{
                uri: `https://www.artic.edu/iiif/2/${data?.image_id}/full/843,/0/default.jpg`,
              }}
              style={
                loadingImage
                  ? {}
                  : {width: undefined, height: undefined, flex: 1}
              }
              resizeMode="center"
              onLoadEnd={() => {
                setloadingImage(false);
                showAnimated();
              }}
            />
          </Animated.View>
        )}

        <View style={{flex: 1}} marginT-8>
          <View row>
            <Text center marginL-4 animated style={styles.label}>
              Title:
            </Text>
            <Text center marginL-4>
              {data?.title || data?.alt_titles}
            </Text>
          </View>

          <View row>
            <Text center marginL-4 animated style={styles.label}>
              Artist:
            </Text>
            <Text center marginL-4>
              {data?.artist_title}
            </Text>
          </View>

          <View row>
            <Text center marginL-4 animated style={styles.label}>
              Artist Display:
            </Text>
            <Text center marginL-4>
              {data?.artist_display}
            </Text>
          </View>

          <View row>
            <Text center marginL-4 animated style={styles.label}>
              Credit:
            </Text>
            <Text center marginL-4>
              {data?.credit_line}
            </Text>
          </View>

          <View row>
            <Text center marginL-4 animated style={styles.label}>
              Dimensions:
            </Text>
            <Text center marginL-4>
              {data?.dimensions}
            </Text>
          </View>
        </View>
      </ScrollView>
      {showBtnAddToFavorite ? (
        <Button
          label="Add to favorite"
          marginH-24
          marginV-24
          disabled={isFetching}
          onPress={handleSaveArtToFavorite}
          backgroundColor="green"
        />
      ) : (
        <Button
          label="Remove from favorites"
          marginH-24
          marginV-24
          disabled={isFetching}
          onPress={handleRemoveArtToFavorite}
        />
      )}
    </SafeAreaView>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  indicator: {
    marginTop: 24,
  },
  label: {
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});
