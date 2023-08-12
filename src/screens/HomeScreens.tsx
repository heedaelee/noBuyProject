import React from 'react';
import {StyleSheet, View} from 'react-native';
import type {HomeTabScreenProps} from 'types/navigation';

import {Colors} from 'config/style-config';

type RouteProps = HomeTabScreenProps<'HomeScreen'>;

export interface HomeScreenProps extends RouteProps {}

const HomeScreen = ({navigation, route}: HomeScreenProps) => {
  return (
    <>
      <View style={styles.block}></View>
    </>
  );
};

const styles = StyleSheet.create({
  block: {
    flex: 1,
    backgroundColor: Colors.white,
  },
});

export default HomeScreen;
