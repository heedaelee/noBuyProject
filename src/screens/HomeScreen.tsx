import React, {useLayoutEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import type {HomeTabScreenProps} from 'types/navigation';

import {headerConfig} from 'config/native-config';
import {Colors, globalStyles} from 'config/style-config';
import Config from 'react-native-config';

type RouteProps = HomeTabScreenProps<'HomeScreen'>;

export interface HomeScreenProps extends RouteProps {}

const HomeScreen = ({navigation, route}: HomeScreenProps) => {
  console.log('홈스크린');
  /* 헤더 삭제함.  */
  useLayoutEffect(() => {
    navigation.setOptions({
      ...headerConfig,
      headerTitle: '',
      headerTransparent: true,
    });
  }, [navigation]);

  /* TODO: 글꼴 당당해 체 로 변경
   */

  return (
    <View style={styles.block}>
      <View style={styles.titleView}>
        <Text style={styles.titleText}>브랜드 리스트</Text>
        <Text>url : {Config.API_URL}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flex: 1,
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: 'red',
    paddingTop: 50,
    alignItems: 'center',
  },
  titleView: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'green',
    alignItems: 'center',
  },
  titleText: globalStyles.titleText,
});

export default HomeScreen;
