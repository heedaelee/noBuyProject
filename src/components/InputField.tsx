import {Colors, _WIDTH} from 'config/style-config';
import React from 'react';
import {StyleSheet, Text, TextInput, TextInputProps, View} from 'react-native';

interface InputFieldProps extends TextInputProps {
  focused?: {};
  touched?: boolean;
  error?: string;
}

const InputField = ({focused, touched, error, ...props}: InputFieldProps) => {
  return (
    <View style={styles.container}>
      {/* TODO: hook 만든 후 styles.inputFocused로 통합하기 */}
      <TextInput style={[styles.input]} {...props} />
      {/* 에러메시지 */}
      {touched && error && <Text style={styles.error}>{error}</Text>}
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
  error: {},
});

export default InputField;
