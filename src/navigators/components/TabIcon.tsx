import {BottomTabKeyType} from 'navigators/BottomTabNavigator';
import React from 'react';

export interface TabIconProps {
  name: BottomTabKeyType;
  focused: boolean;
}

export const TabIcon = ({name, focused}: TabIconProps) => {
  const Icon = {
    Home: <FontAwesome5Icon name="list" size={20} />,
  }[name];

  return <Block></Block>;
};

export default memo(TabIcon);
