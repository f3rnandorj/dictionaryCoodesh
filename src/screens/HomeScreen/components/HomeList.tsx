import React from 'react';
import {useDictionaryGetWordsList} from '../../../domain/Dictionary/useCases/useDictionaryGetWordsList';
import {EmptyData} from '../../../components/EmptyData/EmptyData';
import {WordList} from '../../../components/WordList/WordList';
import {useSeenWordHistory} from '../../../services/seenWordHistory/useSeenWordHistory';

export function HomeList() {
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

  return data ? <WordList data={data} onPressItem={addWord} /> : null;
}
