import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';

import {headerConfig} from 'config/native-config';
import BottomTabNavigator from 'navigators/BottomTabNavigator';
import {RootStackParamList} from 'types/navigation';

const Stack = createNativeStackNavigator<RootStackParamList>();

export type InitRouteNameType = 'BottomTabNavigator';

function App(): JSX.Element {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1000); //스플래시 활성화 시간
  });

  const initRouteName = 'BottomTabNavigator';

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={initRouteName}
        screenOptions={headerConfig}>
        <Stack.Screen
          name="BottomTabNavigator"
          component={BottomTabNavigator}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
