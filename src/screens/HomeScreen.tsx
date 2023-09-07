import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {CircleButton} from 'components/Button';
import {globalStyles} from 'config/style-config';
import {useRouteLog} from 'hooks/use-routeLog';
import type {HomeTabScreenProps} from 'types/navigation';

type RouteProps = HomeTabScreenProps<'HomeScreen'>;

export interface HomeScreenProps extends RouteProps {}

const HomeScreen = ({navigation, route}: HomeScreenProps) => {
  useRouteLog('홈스크린 이다');
  /* 헤더 삭제함.  */
  // useLayoutEffect(() => {
  //   navigation.setOptions({
  //     ...headerConfig,
  //     headerTitle: test,
  //     headerTransparent: true,
  //   });
  // }, [navigation]);

  useEffect(() => {}, []);

  const goToAddBrand = () => {
    navigation.navigate('AddBrandScreen');
  };

  return (
    <View style={styles.block}>
      <View style={styles.titleView}>
        <Text style={styles.titleText}>불매 브랜드 리스트</Text>
        {/* <Text>url : {Config.API_URL}</Text> */}
      </View>
      <View>
        <Text>예시 브랜드 리스트</Text>
      </View>
      <CircleButton onPress={goToAddBrand}>+</CircleButton>
    </View>
  );
};

const styles = StyleSheet.create({
  block: globalStyles.mainBlock,
  titleView: {
    // flex: 1,
    borderWidth: 1,
    borderColor: 'green',
    alignItems: 'center',
  },
  titleText: globalStyles.titleText,
});

export default HomeScreen;
