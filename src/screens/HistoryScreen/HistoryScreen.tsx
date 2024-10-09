import React from 'react';
import {Screen} from '../../components/Screen/Screen';
import {Text} from '../../components/Text/Text';
import {AppTabScreenProps} from '../../routes/navigationType';

export function HistoryScreen({}: AppTabScreenProps<'HistoryScreen'>) {
  return (
    <Screen>
      <Text>HistoryScreen</Text>
    </Screen>
  );
}
