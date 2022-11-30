import {ArtEntity} from '@presenter/domain/entity/art.entity';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Card as CardUI, Image, Text} from 'react-native-ui-lib';

interface Props {
  item: ArtEntity;
}

const Card = ({item}: Props) => {
  const navigation: any = useNavigation();

  return (
    <CardUI
      flex
      marginH-24
      marginV-4
      paddingV-24
      center
      onPress={() => navigation.navigate('DetailScreen', {id: item.id})}>
      <Image
        source={{uri: item?.thumbnail?.lqip}}
        width={20}
        height={20}
        style={{borderRadius: 4}}
      />
      <Text marginL-4>{item?.title || item?.alt_titles}</Text>
      <Text marginL-4>{item?.artist_display}</Text>
    </CardUI>
  );
};

export default Card;
