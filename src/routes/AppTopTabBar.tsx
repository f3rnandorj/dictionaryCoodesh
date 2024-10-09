import React from 'react';

import {useAppSafeArea} from '../hooks/useAppSafeArea';
import {Box, BoxProps, TouchableOpacityBox} from '../components/Box/Box';
import {MaterialTopTabBarProps} from '@react-navigation/material-top-tabs';
import {AppTopTabParamList} from './AppTopTabNavigator';
import {Text} from '../components/Text/Text';

export function AppTopTabBar({
  state,
  descriptors,
  navigation,
}: MaterialTopTabBarProps) {
  const {top} = useAppSafeArea();

  return (
    <Box
      flexDirection="row"
      backgroundColor="background"
      paddingHorizontal="s24"
      style={[{paddingTop: top}]}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];

        const tabItem =
          mapScreenToProps[route.name as keyof AppTopTabParamList];

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacityBox
            key={tabItem.label}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            backgroundColor={isFocused ? 'gray4' : 'grayWhite'}
            {...$tabItem}>
            <Text bold preset="paragraphLarge">
              {tabItem.label}
            </Text>
          </TouchableOpacityBox>
        );
      })}
    </Box>
  );
}

export const mapScreenToProps: Record<
  keyof AppTopTabParamList,
  {
    label: string;
  }
> = {
  HomeScreen: {
    label: 'Word list',
  },
  HistoryScreen: {
    label: 'History',
  },
  FavoriteScreen: {
    label: 'Favorites',
  },
};

const $tabItem: BoxProps = {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  borderWidth: 1,
  paddingVertical: 's10',
};
