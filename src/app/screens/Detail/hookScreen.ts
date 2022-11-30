import {Props} from '@navigation/InjectInterface';
import {ArtEntity} from '@presenter/domain/entity/art.entity';
import {useGetArtByIdQuery} from '@presenter/domain/RTKQuery/art.rtk';
import {get, set} from '@utils/storage.util';
import {useEffect, useState} from 'react';
import {Dimensions} from 'react-native';
import {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from 'react-native-reanimated';

const screenWidth = Dimensions.get('screen').width;

export const useHookDetail = (props: Props) => {
  const {id}: any = props.route.params;
  const {data, isFetching} = useGetArtByIdQuery(id);
  const height = useSharedValue(1);

  const [idsArts, setIdsArts]: any = useState(null);
  const [showBtnAddToFavorite, setShowBtnAddToFavorite] = useState(false);
  const [loadingImage, setloadingImage] = useState(true);

  useEffect(() => {
    fetchAsyncData();
  }, []);

  async function fetchAsyncData() {
    const arts = await get('arts_offline');
    if (arts) {
      const artsP = JSON.parse(arts);
      setIdsArts(artsP);
      const find = artsP.find((e: ArtEntity) => e.id === id);
      setShowBtnAddToFavorite(find ? false : true);
    } else {
      setShowBtnAddToFavorite(true);
    }
  }

  const showAnimated = () => {
    height.value = 300;
  };

  const handleSaveArtToFavorite = async () => {
    const {
      is_boosted,
      title,
      alt_titles,
      thumbnail,
      artist_display,
      image_id,
      artist_title,
      credit_line,
      dimensions,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      ...res
    }: any = data?.data;
    if (idsArts) {
      const newData = idsArts.concat({
        id,
        is_boosted,
        title,
        alt_titles,
        thumbnail,
        artist_display,
        image_id,
        artist_title,
        credit_line,
        dimensions,
      });
      await set({key: 'arts_offline', item: JSON.stringify(newData)});
    } else {
      await set({
        key: 'arts_offline',
        item: JSON.stringify([
          {
            id,
            is_boosted,
            title,
            alt_titles,
            thumbnail,
            artist_display,
            image_id,
            artist_title,
            credit_line,
            dimensions,
          },
        ]),
      });
    }
    await fetchAsyncData();
  };

  const handleRemoveArtToFavorite = async () => {
    const newDataIds = idsArts.filter((e: ArtEntity) => e.id !== id);
    await set({key: 'arts_offline', item: JSON.stringify(newDataIds)});
    await fetchAsyncData();
  };

  const animatedStyles = useAnimatedStyle(() => {
    return {
      width: screenWidth - 8,
      height: withTiming(height.value, {
        duration: 3000,
        easing: Easing.out(Easing.exp),
      }),
      paddingVertical: 24,
    };
  });

  console.log('idsArts', idsArts);

  return {
    data: data?.data,
    isFetching,
    loadingImage,
    animatedStyles,
    showBtnAddToFavorite,
    setloadingImage,
    showAnimated,
    handleSaveArtToFavorite,
    handleRemoveArtToFavorite,
  };
};
