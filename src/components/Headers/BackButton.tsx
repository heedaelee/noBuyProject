import React, {memo} from 'react';
import styled from 'styled-components/native';
import {useNavigation} from '@react-navigation/native';

import {Colors} from 'config/style-config';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

export interface BackButtonProps {
  color?: keyof typeof Colors;
  onPress?: () => void;
}

const BackButton = ({color = 'black', onPress}: BackButtonProps) => {
  const navigation = useNavigation();

  if (!navigation) {
    return null;
  }

  return (
    <Block activeOpacity={0.7} onPress={onPress ? onPress : navigation.goBack}>
      <FontAwesome5Icon color={color} name="chevron-left" size={20} />
    </Block>
  );
};

export default memo(BackButton);

const Block = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  padding-bottom: 1px;
  align-items: center;
  justify-content: center;
`;
