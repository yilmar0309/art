import {selectLoading} from '@presenter/io/loadingSlice';
import React from 'react';
import {ActivityIndicator, Modal, StyleSheet} from 'react-native';
import {View} from 'react-native-ui-lib';

import {useAppSelector} from '@hooks/useRedux';

const Loading = () => {
  const {visible} = useAppSelector(selectLoading);

  return (
    <Modal visible={visible} transparent>
      <View style={styles.container}>
        <ActivityIndicator />
      </View>
    </Modal>
  );
};

export default Loading;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icRainbow: {
    width: 200,
    height: 200,
  },
});
