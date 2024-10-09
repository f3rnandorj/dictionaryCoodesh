import React from 'react';

import {NavigatorScreenParams} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AppTopTabParamList, AppTopTabNavigator} from './AppTopTabNavigator';

export type AppStackParamList = {
  AppTopTabNavigator: NavigatorScreenParams<AppTopTabParamList>;
};

const Stack = createNativeStackNavigator<AppStackParamList>();

interface Props {
  initialRouteName?: keyof AppStackParamList;
}
export function AppStack({initialRouteName = 'AppTopTabNavigator'}: Props) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        fullScreenGestureEnabled: true,
      }}
      initialRouteName={initialRouteName}>
      <Stack.Screen name="AppTopTabNavigator" component={AppTopTabNavigator} />
    </Stack.Navigator>
  );
}
