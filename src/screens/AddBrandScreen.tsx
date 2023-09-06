import React, {useEffect, useLayoutEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {Colors, globalStyles} from 'config/style-config';
import {HomeTabScreenProps} from 'types/navigation';
import {headerConfig} from 'config/native-config';
import {useRouteLog} from 'hooks/use-routeLog';
import {BackButton} from 'components/Headers';

type RouteProps = HomeTabScreenProps<'AddBrandScreen'>;

export interface AddBrandScreenProps extends RouteProps {}

const AddBrandScreen = ({navigation, route}: AddBrandScreenProps) => {
  useRouteLog('AddBrandScreen 이다');
  /* 헤더 삭제함.  */
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft() {
        return <BackButton />;
      },
    });
  }, [navigation]);

  useEffect(() => {}, []);

  return (
    <View style={styles.block}>
      <View style={styles.titleView}>
        <Text style={styles.titleText}>브랜드 추가</Text>
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

export default AddBrandScreen;
