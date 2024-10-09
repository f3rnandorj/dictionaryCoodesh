import React from 'react';
import {Screen} from '../../components/Screen/Screen';
import {AppTabScreenProps} from '../../routes/navigationType';
import {useSeenWordHistory} from '../../services/seenWordHistory/useSeenWordHistory';
import {Button} from '../../components/Button/Button';
import {HistoryList} from './components/HistoryList';

export function HistoryScreen({}: AppTabScreenProps<'HistoryScreen'>) {
  const {clearWordList} = useSeenWordHistory();

  return (
    <Screen flex={1} screenTitle="History">
      <HistoryList />

      <Button title="Limpar histórico" onPress={clearWordList} />
    </Screen>
  );
}
