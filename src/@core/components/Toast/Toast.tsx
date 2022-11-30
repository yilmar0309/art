import {useAppDispatch, useAppSelector} from '@hooks/useRedux';
import {selectToast, setHiddenToast} from '@presenter/io/toastSlice';
import React from 'react';
import {Colors, Incubator} from 'react-native-ui-lib';

const Toast = () => {
  const dispatch = useAppDispatch();
  const {visible, options} = useAppSelector(selectToast);

  const getBackgroundStyle = () => {
    switch (options.variant) {
      case Incubator.ToastPresets.SUCCESS:
        return 'green';
      case Incubator.ToastPresets.FAILURE:
        return 'red';
      default:
        return 'black';
    }
  };
  const getIconColorStyle = () => {
    switch (options.variant) {
      case Incubator.ToastPresets.SUCCESS:
        return Colors.white;
      case Incubator.ToastPresets.FAILURE:
        return Colors.white;
      default:
        return Colors.black;
    }
  };

  const getTextColorStyle = () => {
    switch (options.variant) {
      case Incubator.ToastPresets.SUCCESS:
        return Colors.white;
      case Incubator.ToastPresets.FAILURE:
        return Colors.white;
      default:
        return Colors.black;
    }
  };

  return (
    <Incubator.Toast
      testID="toast"
      visible={visible}
      position={options.position}
      message={options.message}
      centerMessage={options.centerMessage}
      preset={options.variant}
      backgroundColor={getBackgroundStyle()}
      swipeable
      iconColor={getIconColorStyle()}
      zIndex={99999}
      autoDismiss={2000}
      elevation={8}
      onDismiss={() => dispatch(setHiddenToast())}
      messageStyle={{
        color: getTextColorStyle(),
        fontFamily: 'Mulish-Bold',
        fontSize: 14,
      }}
    />
  );
};

export default Toast;
