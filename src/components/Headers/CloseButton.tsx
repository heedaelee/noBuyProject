import React, {memo} from 'react';
import styled from 'styled-components/native';
import {useNavigation} from '@react-navigation/native';

import {Colors} from 'config/style-config';
import AntDesign from 'react-native-vector-icons/AntDesign';

export interface CloseButtonProps {
  color?: keyof typeof Colors;
  onPress?: () => void;
}

const CloseButton = ({color = 'black', onPress}) => {
  const navigation = useNavigation();

  if (!navigation) {
    return null;
  }

  return (
    <Block activeOpacity={0.7} onPress={onPress ? onPress : navigation.goBack}>
      <AntDesign color={color} name="close" size={20} />
    </Block>
  );
};

export default memo(CloseButton);

const Block = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  padding-bottom: 1px;
  align-items: center;
  justify-content: center;
`;
