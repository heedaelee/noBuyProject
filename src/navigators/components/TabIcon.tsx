import {BottomTabKeyType} from 'navigators/BottomTabNavigator';
import React, {memo} from 'react';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import styled from 'styled-components/native';
// import test from './test';

import {Colors} from 'config/style-config';
import {Text, View} from 'react-native';

export interface TabIconProps {
  name: BottomTabKeyType;
  focused: boolean;
}

const homeIcon = ({color = 'currentColor'}: {color?: string}) => (
  <>
    <FontAwesome5Icon color={color} name="home" size={20} />
    <Text>홈</Text>
  </>
);

export const TabIcon = ({name, focused}: TabIconProps) => {
  const Icon = {
    Home: homeIcon,
  }[name];

  return (
    <Block>
      <Icon color={focused ? Colors.gray20 : '#C5CED6'} />
    </Block>
  );
};

const Block = styled.View`
  position: relative;
  width: 100%;
  height: 44px;
  justify-content: center;
  align-items: center;
`;

export default memo(TabIcon);
