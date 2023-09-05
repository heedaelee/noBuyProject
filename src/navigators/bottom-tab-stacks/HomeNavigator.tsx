import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeTabParamList} from 'types/navigation';
import {useRouteLog} from 'hooks/use-routeLog';
import {headerConfig} from 'config/native-config';
import HomeScreen from 'screens/HomeScreen';
import AddBrandScreen from 'screens/AddBrandScreen';

const Stack = createNativeStackNavigator<HomeTabParamList>();

export interface HomeNavigatorProps {}

const HomeNavigator = ({}: HomeNavigatorProps) => {
  const initRouteName = 'HomeScreen';

  useRouteLog();

  return (
    <Stack.Navigator
      initialRouteName={initRouteName}
      screenOptions={headerConfig}>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerStyle: {
            zIndex: 100,
            position: 'relative',
            overflow: 'visible',
          },
        }}
      />
      <Stack.Screen name="AddBrandScreen" component={AddBrandScreen} />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
