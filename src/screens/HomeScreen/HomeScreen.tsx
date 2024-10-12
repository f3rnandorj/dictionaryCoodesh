import React from 'react';
import {Screen} from '../../components/Screen/Screen';
import {AppTabScreenProps} from '../../routes/navigationType';
import {useDictionaryGetWordsList} from '../../domain/Dictionary/useCases/useDictionaryGetWordsList';
import {useSeenWordHistory} from '../../services/seenWordHistory/useSeenWordHistory';
import {HomeList} from './components/HomeList';
import {EmptyData} from '../../components/EmptyData/EmptyData';

import {Keyboard, TouchableWithoutFeedback} from 'react-native';

export function HomeScreen({}: AppTabScreenProps<'HomeScreen'>) {
  const {data, isError, isLoading, refetchList, loadMoreItens} =
    useDictionaryGetWordsList();

  const {addWord} = useSeenWordHistory();

  if (isLoading || isError || !data) {
    return (
      <EmptyData
        error={isError}
        messageError="Erro ao buscar a lista..."
        loading={isLoading}
        onErrorPressButton={refetchList}
      />
    );
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Screen flex={1} screenTitle="Word list">
        {data ? (
          <HomeList
            words={data}
            onPressItem={addWord}
            loadMoreItens={loadMoreItens}
          />
        ) : null}
      </Screen>
    </TouchableWithoutFeedback>
  );
}
