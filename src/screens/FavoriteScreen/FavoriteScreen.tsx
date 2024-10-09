import React from 'react';
import {Screen} from '../../components/Screen/Screen';
import {Text} from '../../components/Text/Text';
import {AppTabScreenProps} from '../../routes/navigationType';

export function FavoriteScreen({}: AppTabScreenProps<'FavoriteScreen'>) {
  return (
    <Screen>
      <Text>FavoriteScreen</Text>
    </Screen>
  );
}
