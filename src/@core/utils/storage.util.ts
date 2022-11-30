import AsyncStorage from '@react-native-async-storage/async-storage';
import {SetBaseParams, SetObjectParams} from '../interfaces/storage.interface';

export const set = async (params: SetBaseParams): Promise<void> => {
  await AsyncStorage.setItem(params.key, params.item);
};

export const get = async (key: string): Promise<string | null> => {
  return AsyncStorage.getItem(key);
};

export const remove = async (key: string): Promise<void> => {
  return AsyncStorage.removeItem(key);
};

export const setObject = async <T>(
  params: SetObjectParams<T>,
): Promise<void> => {
  await set({
    key: params.key,
    item: JSON.stringify(params.object),
  });
};

export const getObject = async <T>(key: string): Promise<T> => {
  return JSON.parse((await get(key)) as string) as T;
};

export const removeObject = async (key: string): Promise<void> => {
  await remove(key);
};
