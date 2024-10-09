import React from 'react';
import {Screen} from '../../components/Screen/Screen';
import {AppTabScreenProps} from '../../routes/navigationType';
import {WordList} from './components/WordList';

export function HomeScreen({}: AppTabScreenProps<'HomeScreen'>) {
  return (
    <Screen flex={1} screenTitle="Word list">
      <WordList />
    </Screen>
  );
}
