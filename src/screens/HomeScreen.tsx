import React, {useLayoutEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import type {HomeTabScreenProps} from 'types/navigation';

import {headerConfig} from 'config/native-config';
import {Colors} from 'config/style-config';

type RouteProps = HomeTabScreenProps<'HomeScreen'>;

export interface HomeScreenProps extends RouteProps {}

const HomeScreen = ({navigation, route}: HomeScreenProps) => {
  console.log('홈스크린');
  // useLayoutEffect(() => {
  //   navigation.setOptions({
  //     ...headerConfig,
  //     headerTitle: '홈',
  //     headerTransparent: true,
  //   });
  // }, [navigation]);

  return (
    <View style={styles.block}>
      <Text>test</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flex: 1,
    backgroundColor: Colors.white,
    borderWidth: 1,
  },
});

export default HomeScreen;
