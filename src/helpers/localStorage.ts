import AsyncStorage from '@react-native-async-storage/async-storage';

export const getStorage = async <T = string>(
  key: string,
  def?: T,
): Promise<T | undefined> => {
  try {
    console.log('localStorage/getStorage() 호출');
    const value = await AsyncStorage.getItem(key);
    //키에 맞는 데이터가 없을때
    if (typeof value === 'undefined' || value === null || value === '') {
      return def;
    }
    // Null || undefined이면 def : T || undefined
    return (JSON.parse(value) as T) ?? def;
  } catch (e) {
    console.log(`getStorage 에러 : ${e}`);
  }
};

export const setStorage = async (
  key: string,
  value: string | unknown,
): Promise<boolean> => {
  try {
    let val: string;
    if (!value) {
      return false;
    } else if (typeof value !== 'string') {
      val = JSON.stringify(value);
    } else {
      val = value;
    }

    await AsyncStorage.setItem(key, val);
    return true;
  } catch (e) {
    console.log(`setStorage 에러 : ${e}`);
  }
  return false;
};

export const removeStorage = async (key: string): Promise<void> => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {
    console.log(`removeStorage 에러 : ${e}`);
  }
};

export const clearAllStorage = async () => {
  await AsyncStorage.clear();
};

export default {
  get: getStorage,
  set: setStorage,
  clearAllStorage,
  remove: removeStorage,
};
