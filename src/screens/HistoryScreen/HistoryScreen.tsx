import React, {useState} from 'react';
import {Screen} from '../../components/Screen/Screen';
import {AppTabScreenProps} from '../../routes/navigationType';
import {useSeenWordHistory} from '../../services/seenWordHistory/useSeenWordHistory';
import {Button} from '../../components/Button/Button';
import {HistoryList} from './components/HistoryList';
import {TextInput} from '../../components/TextInput/TextInput';

export function HistoryScreen({}: AppTabScreenProps<'HistoryScreen'>) {
  const [searchValue, setSearchValue] = useState('');

  const {clearWordList} = useSeenWordHistory();

  return (
    <Screen flex={1} screenTitle="History">
      <TextInput
        boxProps={{mb: 's16'}}
        placeholder="Busque em seu histórico"
        value={searchValue}
        onChangeText={setSearchValue}
        rightComponentName={searchValue.length > 0 ? 'close' : 'search-web'}
        onPressRightIcon={
          searchValue.length > 0 ? () => setSearchValue('') : undefined
        }
      />

      <HistoryList />

      <Button title="Limpar histórico" onPress={clearWordList} />
    </Screen>
  );
}
