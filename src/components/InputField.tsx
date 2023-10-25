import {Colors, _WIDTH} from 'config/style-config';
import React, {ForwardedRef, forwardRef, useRef} from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
} from 'react-native';

interface InputFieldProps extends TextInputProps {
  focused?: boolean;
  error?: string;
}

const InputField = forwardRef(
  (
    {focused, error, ...props}: InputFieldProps,
    ref?: ForwardedRef<TextInput>,
  ) => {
    /** 체크
     * console.log(`value는? : ${JSON.stringify(props.value)}`);
     * console.log(`focused? : ${JSON.stringify(focused)}`);
     */

    /**
     * input 주변 클릭해도 내부 포커싱으로 잡아줌
     */
    const handlePressInput = () => {
      innerRef.current?.focus();
    };

    const innerRef = useRef<TextInput | null>(null);

    /**
     * 기능 : ref개를 배열화하여 ref 걸어주는 기능
     * @param refs
     * @returns (node:<targetDomType>) => void
     */
    const mergeRefs = <T extends {}>(...refs: ForwardedRef<T>[]) => {
      return (node: T) => {
        /** node는 할당받는 ref의 DOM임. 여기선 React의 TextInput의 DOM
         *  왜냐면, 타입지정을 #20행 mergeRefs의 파라미터를 <T>로 지정하고,
         *  파라미터를 ...refs로 배열로 받는데, 그 자료형을 각각 ForwardedRef<T>로
         *  지정함.
         *  결국 여기서 T는 아래 innerRef, ref의 <>제네릭 자료형에 종속되고,
         *  <TextInput>이므로, #21행 node : T는 TextInput 자료형이 된다.
         */
        refs.forEach(ref => {
          if (typeof ref === 'function') {
            // ref가 콜백일땐 (잘 없음..)
            ref(node);
          } else if (ref) {
            // ref가 객체일땐 -> current 프로퍼티를 가짐
            ref.current = node;
          }
        });
      };
    };

    return (
      <Pressable style={styles.container} onPress={handlePressInput}>
        <View style={styles.container}>
          {focused && (
            <Text style={styles.placeholderText}>{props.placeholder}</Text>
          )}
          <TextInput
            /* 설명  : ref 타입은 f12로 들어가서 읽어보면 RefCallback<T> | RefObject<T> | null 3가지  
            타입을 받을 수 있음
            이 코드선 mergeRefs의 return값 callback함수를 받음 () => void, 
            근데 암튼 확실힌 모르겠지만 RefCallback이 아니고, RefObject 로 인식해서
            #22행의 (node:T) 파라미터 node는 타입 지정한 DOM이 들어감
            즉 아래 innerRef의 TextInput의 DOM이 #22행에 node로, 
            아래 ref as...의 ref가 있다면 마찬가지로<TextInput> 지정했으므로 node로 DOM이 할당됨
            따라서 #34행의 ref.current는 
            innerRef.current = TextInput의 DOM,
            ref.current = TextInput의 DOM, 
            이 할당된다.
          */
            ref={mergeRefs(innerRef, ref as ForwardedRef<TextInput>)}
            style={[styles.input, focused ? styles.inputFocused : null]}
            autoCapitalize="none"
            autoCorrect={false}
            spellCheck={false}
            clearButtonMode="while-editing"
            {...props}
            placeholder={focused ? '' : props.placeholder}
          />
          {/* 에러메시지 */}
          {error && <Text style={styles.errorText}>{error}</Text>}
        </View>
      </Pressable>
    );
  },
);

const styles = StyleSheet.create({
  container: {width: '100%'},
  input: {
    padding: 5,
    paddingBottom: 0,
    marginBottom: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    fontSize: _WIDTH / 30,
    width: '100%',
    color: Colors.black,
  },
  inputFocused: {
    borderColor: Colors.blue10,
    borderBottomWidth: 1,
  },
  placeholderText: {
    position: 'absolute',
    top: 0,
    fontSize: _WIDTH / 50,
  },
  errorText: {
    position: 'absolute',
    top: 35,
    color: Colors.red10,
    fontSize: _WIDTH / 34,
    fontFamily: 'Cafe24Dangdanghae-v2.0',
  },
});

export default InputField;
