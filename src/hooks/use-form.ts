import {useState} from 'react';
type InputTypes = 'name' | 'content';

type InitialValue = {
  name: string;
  content: string;
};

const useForm = (initialValue: InitialValue) => {
  const [values, setValues] = useState(initialValue);
  const [focused, setFocused] = useState({});
  const [touched, setTouched] = useState({});

  /**
   * 포커싱 될때
   */
  const handleFocus = (name: Partial<keyof InitialValue>) => {
    setFocused({
      ...focused,
      [name]: true,
    });
  };
  /**
   * 포커싱이 떠날때
   */
  const handleBlur = (name: Partial<keyof InitialValue>) => {
    setFocused({
      ...focused,
      [name]: false,
    });
    setTouched({
      ...touched,
      [name]: true,
    });
  };

  /**
   * 브랜드, 등록 이유 등 텍스트 인풋 입력시 (통합)
   */
  const handleChangeText = (name: string, text: string) => {
    setValues({
      ...values,
      [name]: text.trim(),
    });
  };
  /**
   * @param InputTypes
   * input type을 입력시 해당 state, setState,
   *  blur, focus, changeText 기능의 객체를 제공함
   **/
  const getTextInputProps = (inputName: InputTypes) => {
    const onChangeText = (text: string) => {
      handleChangeText(inputName, text);
    };
    const onBlur = () => handleBlur(inputName);
    const onFocus = () => handleFocus(inputName);
    const value = values[inputName];

    return {value, onBlur, onFocus, onChangeText, focused};
  };
  return {getTextInputProps, values};
};

export default useForm;
