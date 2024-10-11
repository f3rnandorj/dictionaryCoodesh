import React, {useState} from 'react';
import {Screen} from '../../components/Screen/Screen';
import {AppTabScreenProps} from '../../routes/navigationType';
import {useDictionaryGetWordsList} from '../../domain/Dictionary/useCases/useDictionaryGetWordsList';
import {useSeenWordHistory} from '../../services/seenWordHistory/useSeenWordHistory';
import {HomeList} from './components/HomeList';
import {EmptyData} from '../../components/EmptyData/EmptyData';
import {TextInput} from '../../components/Input/Input';
import {Keyboard, TouchableWithoutFeedback} from 'react-native';

export function HomeScreen({}: AppTabScreenProps<'HomeScreen'>) {
  const [searchValue, setSearchValue] = useState('');

  const {data, isError, isLoading, refetch} = useDictionaryGetWordsList();

  const {addWord} = useSeenWordHistory();

  if (isLoading || isError || !data) {
    return (
      <EmptyData
        error={isError}
        messageError="Erro ao buscar a lista..."
        loading={isLoading}
        onErrorPressButton={refetch}
      />
    );
  }

  const filteredList = data.words.filter(word =>
    word.toLowerCase().includes(searchValue.toLowerCase()),
  );

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Screen flex={1} screenTitle="Word list">
        <TextInput
          boxProps={{mb: 's16'}}
          placeholder="Busque sua palavra"
          value={searchValue}
          onChangeText={setSearchValue}
          rightComponentName="search-web"
        />

        {data ? <HomeList words={filteredList} onPressItem={addWord} /> : null}
      </Screen>
    </TouchableWithoutFeedback>
  );
}
