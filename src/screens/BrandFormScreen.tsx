import React, {useCallback, useLayoutEffect, useRef, useState} from 'react';
import {
  Alert,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import uuid from 'react-native-uuid';
import {useRecoilState} from 'recoil';

import DismissKeyboardView from 'components/DismissKeyBoardView';
import {BackButton} from 'components/Headers';
import InputField from 'components/InputField';
import {Colors, _WIDTH, globalStyles} from 'config/style-config';
import useForm from 'hooks/use-form';
import {BrandListState} from 'store/brand-list';
import {HomeTabScreenProps} from 'types/navigation';

type RouteProps = HomeTabScreenProps<'BrandFormScreen'>;

export interface BrandFormScreenProps extends RouteProps {}

const BrandFormScreen = ({navigation, route}: BrandFormScreenProps) => {
  // useRouteLog();
  /* 헤더 삭제함.  */
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft() {
        return <BackButton />;
      },
    });
  }, [navigation]);

  const [loading, setLoading] = useState(false);

  const brandRef = useRef<TextInput | null>(null);
  const reasonRef = useRef<TextInput | null>(null);
  const [brandValue, setBrandValue] = useRecoilState(BrandListState);

  const {brandList, page, selectedI} = brandValue;

  let initialValue = {name: '', content: ''};
  if (page === 'editor' && selectedI !== '-1') {
    brandList.forEach(v => {
      if (v.id === selectedI) {
        initialValue = {name: v.name, content: v.content};
      }
    });
  }
  const brandForm = useForm(initialValue);

  /* NOTE:백업 */
  // page === 'editor' &&
  //   selectedI !== '-1' &&
  //   brandList.forEach((v, i) => {
  //     if (v.id === selectedI) {
  //       brandForm = useForm({name: v.name, content: v.content});
  //     }
  //   });
  /* useEffect(() => {
    page === 'editor' &&
      selectedI !== '-1' &&
      brandList.forEach((v, i) => {
        if (v.id === selectedI) {
          brandForm({name: v.name, content: v.content});
        }
      });
  }, [brandList, page, selectedI]); */

  /**
   * 취소 버튼 클릭시
   */
  const goBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);
  /**
   * 등록 버튼 클릭시
   */
  const onSubmit = useCallback(async () => {
    //TODO: 구현 해야함
    console.log('onSubmit 호출');
    if (loading) {
      return;
    }
    try {
      setLoading(true);
      let newBrandValue;
      if (page === 'register') {
        console.log('등록 process');
        const newBrand = {
          id: uuid.v4(),
          name: brandForm.values.name,
          content: brandForm.values.content,
        };
        newBrandValue = {
          ...brandValue,
          brandList: brandValue.brandList.concat(newBrand),
        };
      } else {
        console.log('수정 process');
        newBrandValue = {
          ...brandValue,
          brandList: brandValue.brandList.map(v =>
            v.id === selectedI
              ? {
                  id: v.id,
                  name: brandForm.values.name,
                  content: brandForm.values.content,
                }
              : v,
          ),
        };
      }
      console.log(JSON.stringify(newBrandValue));
      console.log('setBrandValue호출');
      console.log('newBrandValue:');
      setBrandValue(newBrandValue);
    } catch (error) {
      Alert.alert(`에러 : ${error}`);
    } finally {
      setLoading(false);
      navigation.navigate('HomeScreen');
    }
    //객체 만들고, recoil에 만 넣으면 되
  }, [
    loading,
    page,
    setBrandValue,
    brandForm.values.name,
    brandForm.values.content,
    brandValue,
    selectedI,
    navigation,
  ]);

  console.log(`brandForm.values : ${JSON.stringify(brandForm.values)}`);
  console.log(`brandForm.error : ${JSON.stringify(brandForm.error)}`);
  console.log(`brandForm.focused : ${JSON.stringify(brandForm.focused)}`);

  return (
    <DismissKeyboardView style={styles.DismissKeyboardView}>
      <View style={styles.block}>
        <View style={globalStyles.titleView}>
          <Text style={styles.titleText}>
            {page === 'register' ? '브랜드 추가' : '브랜드 수정'}
          </Text>
        </View>
        <View style={styles.inputWrapper}>
          <InputField
            placeholder="불매할 브랜드를 입력해주세요*"
            placeholderTextColor="#666"
            returnKeyType="next"
            clearButtonMode="while-editing"
            // ref={brandRef}
            onSubmitEditing={() => reasonRef.current?.focus()}
            blurOnSubmit={false}
            multiline={true} // 자동 줄바꿈
            numberOfLines={1} // 디폴트 1줄로 첨에 보임
            {...brandForm.getTextInputProps('name')}
            error={brandForm.error.name}
            focused={brandForm.focused.name}
          />
          <InputField
            placeholder="등록 사유를 입력해주세요"
            placeholderTextColor="#666"
            returnKeyType="next"
            clearButtonMode="while-editing"
            // ref={reasonRef}
            onSubmitEditing={onSubmit}
            blurOnSubmit={false}
            multiline={true}
            numberOfLines={1}
            {...brandForm.getTextInputProps('content')}
            error={brandForm.error.content}
            focused={brandForm.focused.content}
          />

          {/* <TextInput
            style={[styles.textInput, focused ? styles.inputFocused : null]}
            onChangeText={text => handleChangeText('name', text)}
            placeholder="불매할 브랜드를 입력해주세요*"
            placeholderTextColor="#666"
            value={values.name}
            returnKeyType="next"
            clearButtonMode="while-editing"
            ref={brandRef}
            onSubmitEditing={() => reasonRef.current?.focus()}
            blurOnSubmit={false}
            onFocus={() => handleFocus('name')}
            onBlur={() => handleBlur('name')}
            multiline={true}
            numberOfLines={1}
          /> */}
          {/* <TextInput
            style={[styles.input, focused ? styles.inputFocused : null]}
            onChangeText={text => handleChangeText('content', text)}
            placeholder="등록 사유를 입력해주세요"
            placeholderTextColor="#666"
            value={values.content}
            returnKeyType="next"
            clearButtonMode="while-editing"
            ref={reasonRef}
            onSubmitEditing={onSubmit}
            blurOnSubmit={false}
            onFocus={() => handleFocus('content')}
            onBlur={() => handleBlur('content')}
            // 자동 줄바꿈
            multiline={true}
            // 디폴트 1줄로 첨에 보임
            numberOfLines={1}
          /> */}
          <View style={styles.buttonWrapper}>
            <Pressable
              style={({pressed}) => [
                {
                  backgroundColor: pressed ? Colors.gray60 : 'white',
                  marginRight: 10,
                },
                styles.button,
              ]}
              onPress={goBack}>
              <Text style={styles.buttonText}>취소</Text>
            </Pressable>
            <Pressable
              style={StyleSheet.compose(
                styles.button,
                styles.registrationButton,
              )}
              onPress={onSubmit}>
              <Text style={{...styles.buttonText, color: Colors.white}}>
                {page === 'register' ? '등록' : '수정'}
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </DismissKeyboardView>
  );
};

const styles = StyleSheet.create({
  DismissKeyboardView: {flex: 1},
  block: globalStyles.mainBlock,
  titleText: globalStyles.titleText,
  inputWrapper: {
    ...globalStyles.titleView,
    marginTop: 10,
  },
  input: {
    padding: 5,
    paddingBottom: 0,
    marginBottom: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    fontSize: _WIDTH / 30,
    width: '100%',
    color: Colors.black,
  },
  buttonWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 15,
    marginBottom: 0,
    width: '100%',
  },
  button: {
    paddingVertical: 9,
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  registrationButton: {
    backgroundColor: '#3f51b5',
    borderRadius: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 10,
    elevation: 6,
  },
  inputFocused: {
    borderColor: Colors.blue10,
    borderBottomWidth: 1,
  },
  buttonText: {
    fontSize: 15,
    color: 'black',
    fontFamily: 'Cafe24Dangdanghae-v2.0',
  },
});

export default BrandFormScreen;
