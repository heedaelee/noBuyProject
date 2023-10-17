import {useState} from 'react';
type InputTypes = 'name' | 'content';

type InitialValue = {
  name: string;
  content: string;
};
/**
 * @description getTextInputProps() 통해 return 값으로
 * value, onBlur, onFocus, onChangeText, focuse를 해당 컴포넌트에 내려줌
 * @param initialValue
 * @returns getTextInputProps, values
 */
const useForm = (initialValue: InitialValue) => {
  const [values, setValues] = useState(initialValue);
  const [focused, setFocused] = useState<Record<keyof InitialValue, boolean>>({
    content: false,
    name: false,
  });
  const [error, setError] = useState<InitialValue>({name: '', content: ''});

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
   * 포커싱될때 칸 테두리 색변화 때문에 예제랑 다르게 Blur 추가함
   * 그리고 해당 name의 Touched가 활성화 되어야 함, focus는 비활성화 되어야..
   */
  const handleBlur = (name: Partial<keyof InitialValue>) => {
    setFocused({
      ...focused,
      [name]: false,
    });
  };

  /**
   * 브랜드, 등록 이유 등 텍스트 인풋 입력시 (통합)
   */
  const handleChangeText = (name: InputTypes, text: string) => {
    setValues({
      ...values,
      [name]: text.trim(),
    });
  };
  /**TODO:
   * Validation 함수,
   */
  const handleValidationError = (name: InputTypes, text: string) => {
    let message = '';
    switch (name) {
      case 'name':
        text.length > 20 && (message = '20자리 이내로 입력해주세요:)');
        break;
      case 'content':
        text.length > 40 && (message = '40자리 이내로 입력해주세요:)');
        break;
    }
    setError({
      ...error,
      [name]: message,
    });
  };

  /**
   * @param InputTypes
   * input type을 입력시 해당 state, setState, blur, focus, changeText 기능의 객체를 제공함
   **/
  const getTextInputProps = (inputName: InputTypes) => {
    const onChangeText = (text: string) => {
      handleChangeText(inputName, text);
      handleValidationError(inputName, text);
    };
    const onBlur = () => handleBlur(inputName);
    const onFocus = () => handleFocus(inputName);
    const value = values[inputName];

    return {value, onBlur, onFocus, onChangeText};
  };
  return {getTextInputProps, values, error, focused};
};

export default useForm;
