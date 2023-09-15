import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * localStorageEffect
 * recoil 초기값 스토리지에 저장,
 * recoil의 값 변동에 따라 스토리지에 값 변경 및 삭제하는 effect 함수
 * @param key
 */
export const localStorageEffect =
  <T>(key: string) =>
  ({setSelf, onSet}: any) => {
    AsyncStorage.getItem(key).then(result => {
      //키가 AsyncStorage에 없다면, parsing해서 set
      if (result != null) {
        console.log('해당 키 없어서 set함: 초기화');
        setSelf(JSON.parse(result ?? ''));
      }
    });

    /**
     * onSet()에서 isReset이 true 이면, asyncStorage에 아이템 삭제,
     * false면 주어진 key, newvalue에 따라 set
     * */
    onSet(async (newValue: T, _: any, isReset: boolean) => {
      if (isReset) {
        console.log(`AsyncStorage.removeItem(${key}) 실행`);
        await AsyncStorage.removeItem(key);
      } else {
        AsyncStorage.setItem(key, JSON.stringify(newValue));
        console.log(
          `AsyncStorage.setItem(${key}, JSON.stringify(${newValue})) 실행`,
        );
      }
      /* 실제       
        isReset
        ? await AsyncStorage.removeItem(key)
        : AsyncStorage.setItem(key, JSON.stringify(newValue)); */
    });
  };
