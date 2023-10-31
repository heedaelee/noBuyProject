import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeTabParamList} from 'types/navigation';
import {useRouteLog} from 'hooks/useRouteLog';
import {headerConfig} from 'config/native-config';
import HomeScreen from 'screens/HomeScreen';
import BrandFormScreen from 'screens/BrandFormScreen';

const Stack = createNativeStackNavigator<HomeTabParamList>();

export interface HomeNavigatorProps {}

const HomeNavigator = ({}: HomeNavigatorProps) => {
  const initRouteName = 'HomeScreen';

  useRouteLog();

  return (
    <Stack.Navigator
      initialRouteName={initRouteName}
      screenOptions={headerConfig}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="BrandFormScreen" component={BrandFormScreen} />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
