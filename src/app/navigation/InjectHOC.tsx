import React from 'react';
import useResetNavigation from '@hooks/useResetNavigation';
import {setShowToast} from '@presenter/io/toastSlice';
import {setHiddenLoading, setShowLoading} from '@presenter/io/loadingSlice';

function InjectHOC<Props, F>(WrappedComponent: React.FC<Props & F>, slices: F) {
  const {navigateWithReset} = useResetNavigation();
  const ComponentWithExtraInfo = (props: Props) => {
    return (
      <WrappedComponent
        {...props}
        {...slices}
        navigateWithReset={navigateWithReset}
        setShowToast={setShowToast}
        setHiddenLoading={setHiddenLoading}
        setShowLoading={setShowLoading}
      />
    );
  };
  return ComponentWithExtraInfo;
}

export default InjectHOC;
