import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useRecoilState} from 'recoil';

import {CircleButton} from 'components/Button';
import {globalStyles} from 'config/style-config';
import {useRouteLog} from 'hooks/useRouteLog';
import type {HomeTabScreenProps} from 'types/navigation';
import BrandList from 'components/BrandList';
import {BrandListState} from 'store/brand-list';

type RouteProps = HomeTabScreenProps<'HomeScreen'>;

export interface HomeScreenProps extends RouteProps {}

const HomeScreen = ({navigation, route}: HomeScreenProps) => {
  useRouteLog('홈스크린');
  /* 헤더 삭제함.  */
  // useLayoutEffect(() => {
  //   navigation.setOptions({
  //     ...headerConfig,
  //     headerTitle: test,
  //     headerTransparent: true,
  //   });
  // }, [navigation]);

  const [initialState, setInitialState] = useRecoilState(BrandListState);

  useEffect(() => {}, []);

  const goToAddBrand = () => {
    setInitialState({...initialState, page: 'register'});
    navigation.navigate('BrandFormScreen');
  };

  return (
    <View style={styles.block}>
      <View style={styles.titleView}>
        <Text style={styles.titleText}>불매 브랜드 리스트</Text>
        {/* <Text>url : {Config.API_URL}</Text> */}
      </View>
      {/* 브랜드 리스트 시작 */}
      <BrandList />
      {/* 브랜드 리스트 끝 */}
      <CircleButton onPress={goToAddBrand}>+</CircleButton>
    </View>
  );
};

const styles = StyleSheet.create({
  block: globalStyles.mainBlock,
  titleView: globalStyles.titleView,
  titleText: globalStyles.titleText,
});

export default HomeScreen;
