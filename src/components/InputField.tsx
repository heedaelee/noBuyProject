import {Colors, _WIDTH} from 'config/style-config';
import React from 'react';
import {StyleSheet, Text, TextInput, TextInputProps, View} from 'react-native';

interface InputFieldProps extends TextInputProps {
  focused?: boolean;
  error?: string;
}

const InputField = ({focused, error, ...props}: InputFieldProps) => {
  /* 체크 */
  /* console.log(`value는? : ${JSON.stringify(props.value)}`);
  console.log(`focused? : ${JSON.stringify(focused)}`); */
  return (
    <View style={styles.container}>
      {/* TODO: hook 만든 후 styles.inputFocused로 통합하기 */}
      {focused && (
        <Text style={styles.placeholderText}>{props.placeholder}</Text>
      )}
      <TextInput
        style={[styles.input, focused ? styles.inputFocused : null]}
        {...props}
        placeholder={focused ? '' : props.placeholder}
      />
      {/* 에러메시지 */}
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

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
