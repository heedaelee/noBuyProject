import React, {useEffect, useLayoutEffect, useRef} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {OutlinedTextField} from 'rn-material-ui-textfield';

import {BackButton} from 'components/Headers';
import {globalStyles} from 'config/style-config';
import {useRouteLog} from 'hooks/use-routeLog';
import {HomeTabScreenProps} from 'types/navigation';

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

  const fieldRef = useRef<any>(null);

  useEffect(() => {}, []);

  /**
   * 전송 함수
   */
  const onSubmit = () => {
    let {current: field} = fieldRef;
    field!! && console.log(` onSubmit함수값 : ${field.value()}`);
  };

  /**
   * validation
   */
  const validationBrand = (text: string) => {
    text!! && console.log(` vali브랜드 값 : ${text}`);
    return text.replace(/[^+\d]/g, '');
  };

  return (
    <View style={styles.block}>
      <View style={globalStyles.titleView}>
        <Text style={styles.titleText}>브랜드 추가</Text>
      </View>
      <View style={styles.inputWrapper}></View>
      <OutlinedTextField
        label="phone123"
        formatText={validationBrand}
        keyboardType="phone-pad"
        onSubmitEditing={onSubmit}
        ref={fieldRef}
        placeholder="testddf"
        defaultValue={'eerer'}
        lineWidth
      />
    </View>
  );
};

const styles = StyleSheet.create({
  block: globalStyles.mainBlock,
  titleText: globalStyles.titleText,
  inputWrapper: {...globalStyles.titleView, marginTop: 10, borderWidth: 1},
});

export default AddBrandScreen;
