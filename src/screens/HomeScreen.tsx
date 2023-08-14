import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import type {HomeTabScreenProps} from 'types/navigation';

import {Colors} from 'config/style-config';

type RouteProps = HomeTabScreenProps<'HomeScreen'>;

export interface HomeScreenProps extends RouteProps {}

const HomeScreen = ({navigation, route}: HomeScreenProps) => {
  console.log('홈스크린');
  return (
    <View style={styles.block}>
      <Text>test</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    // flex: 1,
    backgroundColor: Colors.black,
    borderBottomWidth: 10,
  },
});

export default HomeScreen;
