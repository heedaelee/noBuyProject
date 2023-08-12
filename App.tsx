import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {SafeAreaView} from 'react-native';

import {headerConfig} from 'config/native-config';
import BottomTabNavigator from 'navigators/BottomTabNavigator';

const Stack = createNativeStackNavigator<RootStackParamList>();

export type InitRouteNameType = 'BottomTabNavigator';

function App(): JSX.Element {
  const initRouteName = 'BottomTabNavigator';

  return (
    <SafeAreaView>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={initRouteName}
          screenOptions={headerConfig}>
          <Stack.Screen
            name="BottomTabNavigator"
            component={BottomTabNavigator}
            // options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default App;
