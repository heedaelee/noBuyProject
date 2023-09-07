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

const backgroundColor = '#ffffff';

const styles = StyleSheet.create({
  block: globalStyles.mainBlock,
  //TODO: Content 박스 달아야함.
  titleView: {
    marginTop: 20,
    width: '70%',
    padding: 8,
    // borderWidth: 1,
    // borderColor: 'green',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 10,
    elevation: 6,
    backgroundColor: backgroundColor,
    borderRadius: 20,
  },
  titleText: globalStyles.titleText,
  inputWrapper: {
    borderWidth: 1,
    borderColor: 'black',
  },
});

export default AddBrandScreen;
