import {CompositeScreenProps} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {AppStackParamList} from './AppStack';
import {AppTopTabParamList} from './AppTopTabNavigator';
import {MaterialTopTabScreenProps} from '@react-navigation/material-top-tabs';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends AppStackParamList {}
  }
}

export type AppScreenProps<RouteName extends keyof AppStackParamList> =
  NativeStackScreenProps<AppStackParamList, RouteName>;

export type AppTabScreenProps<RouteName extends keyof AppTopTabParamList> =
  CompositeScreenProps<
    MaterialTopTabScreenProps<AppTopTabParamList, RouteName>,
    NativeStackScreenProps<AppStackParamList, 'AppTopTabNavigator'>
  >;
