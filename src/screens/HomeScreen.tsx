import React, {useEffect, useLayoutEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import type {HomeTabScreenProps} from 'types/navigation';
import {Colors, globalStyles} from 'config/style-config';
import {CircleButton} from 'components/Button';
import {headerConfig} from 'config/native-config';
import {useRouteLog} from 'hooks/use-routeLog';

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
  block: {
    flex: 1,
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: 'red',
    // paddingTop: 50,
    alignItems: 'center',
  },
  titleView: {
    // flex: 1,
    borderWidth: 1,
    borderColor: 'green',
    alignItems: 'center',
  },
  titleText: globalStyles.titleText,
});

export default HomeScreen;
