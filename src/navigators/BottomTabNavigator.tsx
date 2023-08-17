import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {useMemo} from 'react';
import HomeScreen from 'screens/HomeScreen';
import {BottomTabParamList} from '../types/navigation';
import TabIcon from './components/TabIcon';

/**
 * NOTE: 이후 scanner 등 Tab 추가 설치시 추가
 */
export type BottomTabKeyType = 'Home';

/**
 * TODO TAB에 필요한 네비게이터들 타입 정의 필요합니다.
 */
const Tab = createBottomTabNavigator<BottomTabParamList>();

const BottomTabNavigator = () => {
  const initialRouteName = 'HomeScreen';

  const mainRoutes: {
    key: BottomTabKeyType;
    name: keyof BottomTabParamList;
    component: ({}: any) => JSX.Element;
  }[] = useMemo(
    () => [
      {
        key: 'Home',
        name: 'HomeScreen',
        component: HomeScreen,
      },
    ],
    [],
  );

  return (
    <Tab.Navigator
      initialRouteName={initialRouteName}
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
      }}>
      {mainRoutes.map(route => {
        console.log(route.component);
        return (
          <Tab.Screen
            key={`stack-${route.key}`}
            name={route.name}
            component={route.component}
            options={{
              unmountOnBlur: true,
              tabBarIcon: ({focused}) => (
                <TabIcon name={route.key} focused={focused} />
              ),
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
