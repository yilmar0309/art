import {createSlice} from '@reduxjs/toolkit';

import {RootState} from '.';

interface Options {
  message?: string | undefined;
  icon?: any;
}

export interface LoadingSlice {
  visible: boolean;
  options: Options;
}

const initialState: LoadingSlice = {
  visible: false,
  options: {
    message: '',
    icon: '',
  },
};

const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    setShowLoading: (state, action) => {
      state.visible = true;
      state.options = {...action.payload};
    },
    setHiddenLoading: state => {
      state.visible = false;
    },
  },
});

export const {setShowLoading, setHiddenLoading} = loadingSlice.actions;

export const selectLoading = (state: RootState) => state.loading;

export default loadingSlice.reducer;
