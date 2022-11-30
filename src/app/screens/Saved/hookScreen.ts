import {useIsFocused} from '@react-navigation/native';
import {get} from '@utils/storage.util';
import {useEffect, useState} from 'react';

export const useHookSaved = () => {
  const [data, setData]: any = useState([]);
  const [loading, setloading] = useState(false);
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      fetchAsyncData();
    }
  }, [isFocused]);

  async function fetchAsyncData() {
    await setloading(true);
    const arts = await get('arts_offline');
    if (arts) {
      const artsP = JSON.parse(arts);
      setData(artsP);
    } else {
      setData([]);
    }
    await setloading(false);
  }

  return {
    data,
    loading,
    fetchAsyncData,
  };
};
