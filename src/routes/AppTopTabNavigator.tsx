import React from 'react';

import {AppTopTabBar} from './AppTopTabBar';
import {
  createMaterialTopTabNavigator,
  MaterialTopTabBarProps,
} from '@react-navigation/material-top-tabs';
import {HomeScreen} from '../screens/HomeScreen/HomeScreen';
import {HistoryScreen} from '../screens/HistoryScreen/HistoryScreen';
import {FavoriteScreen} from '../screens/FavoriteScreen/FavoriteScreen';

export type AppTopTabParamList = {
  HomeScreen: undefined;
  HistoryScreen: undefined;
  FavoriteScreen: undefined;
};

const Tab = createMaterialTopTabNavigator<AppTopTabParamList>();

export function AppTopTabNavigator() {
  function renderTabBar(props: MaterialTopTabBarProps) {
    return <AppTopTabBar {...props} />;
  }

  return (
    <Tab.Navigator tabBar={renderTabBar}>
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="HistoryScreen" component={HistoryScreen} />
      <Tab.Screen name="FavoriteScreen" component={FavoriteScreen} />
    </Tab.Navigator>
  );
}
