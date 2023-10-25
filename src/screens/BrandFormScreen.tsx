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

const BrandFormScreen = ({navigation}: BrandFormScreenProps) => {
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
  const contentRef = useRef<TextInput | null>(null);
  const [brandValue, setBrandValue] = useRecoilState(BrandListState);

  const {brandList, page, selectedI} = brandValue;

  /**
   * brandList 데이터, useForm 훅에 할당하는 작업
   */
  let initialValue = {name: '', content: ''};
  if (page === 'editor' && selectedI !== '-1') {
    brandList.forEach(v => {
      if (v.id === selectedI) {
        initialValue = {name: v.name, content: v.content};
      }
    });
  }
  /**
   * 초기 값 넣고, values랑 input 컨트롤 프로퍼티 리턴해 줌
   * @param initialValue
   * @returns {getTextInputProps, values, error, focused}
   */
  const brandForm = useForm(initialValue);

  /**
   * submit 버튼 활성화 변수
   */
  const canGoNext =
    !!brandForm.values.name &&
    !brandForm.error.name &&
    !brandForm.error.content;

  /**
   * 취소 버튼 클릭시
   */
  const goBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);
  /**
   * 삭제 버튼 클릭시
   */
  const onDelete = useCallback(async () => {
    /* TODO: 삭제 여부 모달 */
    Alert.alert(`test`);
    if (loading) {
      return;
    }
    try {
      /* 로직 */
      const newBrandValue = {
        ...brandValue,
        brandList: brandValue.brandList.filter(v => v.id !== selectedI),
      };
      setBrandValue(newBrandValue);
      setLoading(true);
    } catch (error) {
      Alert.alert(`에러 : ${error}`);
    } finally {
      setLoading(false);
      navigation.navigate('HomeScreen');
    }
  }, [brandValue, loading, navigation, selectedI, setBrandValue]);
  /**
   * 등록 버튼 클릭시
   */
  const onSubmit = useCallback(async () => {
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
      // 체크
      // console.log(JSON.stringify(newBrandValue));
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

  //체크
  /* console.log(`brandForm.values : ${JSON.stringify(brandForm.values)}`);
  console.log(`brandForm.error : ${JSON.stringify(brandForm.error)}`);
  console.log(`brandForm.focused : ${JSON.stringify(brandForm.focused)}`); */
  return (
    <DismissKeyboardView style={styles().DismissKeyboardView}>
      <View style={styles().block}>
        <View style={globalStyles.titleView}>
          <Text style={styles().titleText}>
            {page === 'register' ? '브랜드 추가' : '브랜드 수정'}
          </Text>
        </View>
        <View style={styles().inputWrapper}>
          <InputField
            placeholder="불매할 브랜드를 입력해주세요*"
            placeholderTextColor="#666"
            returnKeyType="next"
            clearButtonMode="while-editing"
            /* 완료 누를때 동작 핸들러 */
            onSubmitEditing={() => {
              contentRef.current?.focus();
            }}
            blurOnSubmit={false}
            numberOfLines={1} // 디폴트 1줄로 첨에 보임
            maxLength={21}
            {...brandForm.getTextInputProps('name')}
            error={brandForm.error.name}
            focused={brandForm.focused.name}
          />
          <InputField
            placeholder="등록 사유를 입력해주세요"
            placeholderTextColor="#666"
            returnKeyType="send"
            clearButtonMode="while-editing"
            ref={contentRef}
            onSubmitEditing={onSubmit}
            blurOnSubmit={false}
            multiline={true}
            maxLength={41}
            numberOfLines={1}
            {...brandForm.getTextInputProps('content')}
            error={brandForm.error.content}
            focused={brandForm.focused.content}
          />
          <View style={styles().buttonWrapper}>
            {page === 'editor' && (
              <Pressable
                style={({pressed}) => [
                  {
                    backgroundColor: pressed ? Colors.gray60 : 'white',
                    // marginRight: 10,
                  },
                  styles().button,
                ]}
                onPress={onDelete}>
                <Text style={styles().buttonText}>삭제</Text>
              </Pressable>
            )}

            <Pressable
              style={({pressed}) => [
                {
                  backgroundColor: pressed ? Colors.gray60 : 'white',
                  marginRight: 10,
                },
                styles().button,
              ]}
              onPress={goBack}>
              <Text style={styles().buttonText}>취소</Text>
            </Pressable>
            <Pressable
              style={StyleSheet.compose(
                styles().button,
                styles(canGoNext).registrationButton,
              )}
              onPress={canGoNext ? onSubmit : null}>
              <Text style={{...styles().buttonText, color: Colors.white}}>
                {page === 'register' ? '등록' : '수정'}
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </DismissKeyboardView>
  );
};

const styles = (canGoNext?: boolean) =>
  StyleSheet.create({
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
      backgroundColor: canGoNext ? Colors.blue10 : Colors.gray70,
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
