import React from 'react';
import {Screen} from '../../components/Screen/Screen';
import {AppTabScreenProps} from '../../routes/navigationType';
import {FavoriteList} from './components/FavoriteList';

export function FavoriteScreen({}: AppTabScreenProps<'FavoriteScreen'>) {
  return (
    <Screen flex={1} screenTitle="Favorites">
      <FavoriteList />
    </Screen>
  );
}
