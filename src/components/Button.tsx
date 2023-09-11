/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import styled from 'styled-components/native';
import {StyleProp, Text, ViewStyle} from 'react-native';
import {ColorStatus, _HEIGHT, _WIDTH, globalStyles} from 'config/style-config';

interface ButtonProps {
  children: any;
  onPress?: (param?: any) => void;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
}

export const CircleButton = ({children, onPress}: ButtonProps) => {
  //Default value
  const style = {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  };

  return (
    <CircleButtonStyled
      onPress={onPress ? () => onPress() : undefined}
      style={style}>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 30,
          color: 'white',
          fontFamily: globalStyles.titleText.fontFamily,
          opacity: 1,
        }}>
        {children}
      </Text>
    </CircleButtonStyled>
  );
};

const CircleButtonStyled = styled.TouchableOpacity`
  position: absolute;
  align-items: center;
  width: 40px;
  height: 40px;
  background-color: ${ColorStatus.Error};
  border-radius: 40px;
  justify-content: flex-end;
  bottom: ${_HEIGHT / 40}px;
  right: ${_WIDTH / 8}px;
`;
