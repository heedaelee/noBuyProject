import React from 'react';
import {StyleSheet, Text, TextInput, TextInputProps, View} from 'react-native';

interface InputFieldProps extends TextInputProps {
  touched?: boolean;
  error?: string;
}

const InputField = ({touched, error, ...props}: InputFieldProps) => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} {...props} />
      {/* 에러메시지 */}
      {touched && error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  input: {},
  error: {},
});

export default InputField;
