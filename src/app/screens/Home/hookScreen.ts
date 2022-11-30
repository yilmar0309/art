import {useGetAllArtQuery} from '@presenter/domain/RTKQuery/art.rtk';
import {useEffect, useState} from 'react';

export const useHookHome = () => {
  const [data, setData]: any = useState([]);
  const [page, setPage] = useState(1);
  const [refreshing, setRefreshing] = useState(false);
  const {data: dataArt, isFetching, refetch}: any = useGetAllArtQuery(page);

  useEffect(() => {
    if (page === 1) {
      setData(dataArt?.data);
    } else {
      setData([...data, ...dataArt?.data]);
    }
  }, [dataArt]);

  const onRefresh = async () => {
    await setPage(1);
    setRefreshing(true);
    await refetch(page + 1);
    setRefreshing(false);
  };

  const handleGetMore = async () => {
    await setPage(page + 1);
    await refetch(page + 1);
  };

  console.log('data', data);

  return {
    data: data,
    isFetching,
    refreshing,
    onRefresh,
    handleGetMore,
  };
};
