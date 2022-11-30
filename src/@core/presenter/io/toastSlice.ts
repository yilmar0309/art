import {createSlice} from '@reduxjs/toolkit';
import {Incubator} from 'react-native-ui-lib';

import {RootState} from '.';

interface Options {
  variant: Incubator.ToastPresets | undefined;
  message?: string | undefined;
  centerMessage: boolean | undefined;
  position: 'top' | 'bottom' | undefined;
}

export interface ToastSlice {
  visible: boolean;
  options: Options;
}

const initialState: ToastSlice = {
  visible: false,
  options: {
    variant: Incubator.ToastPresets.SUCCESS,
    message: 'Test alert to show',
    centerMessage: true,
    position: 'top',
  },
};

const toastSlice = createSlice({
  name: 'toast',
  initialState,
  reducers: {
    setShowToast: (state, action) => {
      state.visible = true;
      state.options = {...action.payload};
    },
    setHiddenToast: state => {
      state.visible = false;
    },
  },
});

export const {setShowToast, setHiddenToast} = toastSlice.actions;

export const selectToast = (state: RootState) => state.toast;

export default toastSlice.reducer;
