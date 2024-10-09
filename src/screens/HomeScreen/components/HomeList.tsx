import React from 'react';
import {useDictionaryGetWordsList} from '../../../domain/Dictionary/useCases/useDictionaryGetWordsList';
import {EmptyData} from '../../../components/EmptyData/EmptyData';
import {WordList} from '../../../components/WordList/WordList';

export function HomeList() {
  const {data, isError, isLoading, refetch} = useDictionaryGetWordsList();

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

  return data ? <WordList data={data} /> : null;
}
