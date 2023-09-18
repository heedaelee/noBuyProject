import {BackButton} from 'components/Headers';
import {Colors, _WIDTH, globalStyles} from 'config/style-config';
import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
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

import {BrandListState} from 'store/brand-list';
import {HomeTabScreenProps} from 'types/navigation';

type RouteProps = HomeTabScreenProps<'AddBrandScreen'>;

export interface AddBrandScreenProps extends RouteProps {}

const AddBrandScreen = ({navigation, route}: AddBrandScreenProps) => {
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
  const [name, setName] = useState('');
  const [content, setContent] = useState('');
  const brandRef = useRef<TextInput | null>(null);
  const reasonRef = useRef<TextInput | null>(null);
  const [brandList, setBrandList] = useRecoilState(BrandListState);
  const [isFocused1, setIsFocused1] = useState(false);
  const [isFocused2, setIsFocused2] = useState(false);

  useEffect(() => {}, []);
  /**
   * 브랜드 이름 입력시
   */
  const onChangeBrand = useCallback((text: string) => {
    setName(text.trim());
  }, []);
  /**
   * 등록 이유 입력시
   */
  const onChangeReason = useCallback((text: string) => {
    setContent(text.trim());
  }, []);
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
      const newBrand = {
        id: uuid.v4(),
        name: name,
        content: content,
      };
      brandList.concat(newBrand);
      setBrandList(brandList);
    } catch (error) {
      Alert.alert(`에러 : ${error}`);
    } finally {
      setLoading(false);
      //navigation.navigate('HomeScreen');
    }
    //객체 만들고, recoil에 만 넣으면 되
  }, [name, brandList, content, loading, setBrandList]);

  return (
    <View style={styles.block}>
      <View style={globalStyles.titleView}>
        <Text style={styles.titleText}>브랜드 추가</Text>
      </View>
      <View style={styles.inputWrapper}>
        <TextInput
          style={[styles.textInput, isFocused1 ? styles.inputFocused : null]}
          onChangeText={onChangeBrand}
          placeholder="불매할 브랜드를 입력해주세요*"
          placeholderTextColor="#666"
          value={name}
          returnKeyType="next"
          clearButtonMode="while-editing"
          ref={brandRef}
          onSubmitEditing={() => reasonRef.current?.focus()}
          blurOnSubmit={false}
          onFocus={() => setIsFocused1(true)}
          onBlur={() => setIsFocused1(false)}
        />
        <TextInput
          style={[styles.textInput, isFocused2 ? styles.inputFocused : null]}
          onChangeText={onChangeReason}
          placeholder="등록 사유를 입력해주세요"
          placeholderTextColor="#666"
          value={content}
          returnKeyType="next"
          clearButtonMode="while-editing"
          ref={reasonRef}
          onSubmitEditing={onSubmit}
          blurOnSubmit={false}
          onFocus={() => setIsFocused2(true)}
          onBlur={() => setIsFocused2(false)}
        />
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
            style={StyleSheet.compose(styles.button, styles.registrationButton)}
            onPress={onSubmit}>
            <Text style={{...styles.buttonText, color: Colors.white}}>
              등록
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  block: globalStyles.mainBlock,
  titleText: globalStyles.titleText,
  inputWrapper: {
    ...globalStyles.titleView,
    marginTop: 10,
  },
  textInput: {
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
    // borderWidth: 1,
    // borderColor: 'green',
    // width: '100%',
    // height: 100,
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

export default AddBrandScreen;
