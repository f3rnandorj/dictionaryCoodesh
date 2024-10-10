import React from 'react';
import {Screen} from '../../components/Screen/Screen';
import {AppTabScreenProps} from '../../routes/navigationType';
import {useDictionaryGetWordsList} from '../../domain/Dictionary/useCases/useDictionaryGetWordsList';
import {useSeenWordHistory} from '../../services/seenWordHistory/useSeenWordHistory';
import {HomeList} from './components/HomeList';
import {EmptyData} from '../../components/EmptyData/EmptyData';

export function HomeScreen({}: AppTabScreenProps<'HomeScreen'>) {
  const {data, isError, isLoading, refetch} = useDictionaryGetWordsList();

  const {addWord} = useSeenWordHistory();

  if (isLoading || isError) {
    return (
      <EmptyData
        error={isError}
        messageError="Erro ao buscar a lista..."
        loading={isLoading}
        onErrorPressButton={refetch}
      />
    );
  }

  return (
    <Screen flex={1} screenTitle="Word list">
      {data ? <HomeList words={data.words} onPressItem={addWord} /> : null}
    </Screen>
  );
}
