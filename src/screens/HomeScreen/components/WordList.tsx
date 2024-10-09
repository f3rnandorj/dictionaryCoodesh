import React from 'react';
import {Text} from '../../../components/Text/Text';
import {FlatList, ListRenderItemInfo} from 'react-native';
import {PressableBox} from '../../../components/Box/Box';
import {useDictionaryGetWordsList} from '../../../domain/Dictionary/useCases/useDictionaryGetWordsList';
import {EmptyList} from './EmptyList';

export function WordList() {
  const {data, isError, isLoading, refetch} = useDictionaryGetWordsList();

  function renderItem({item, index}: ListRenderItemInfo<string>) {
    const isFirstColumn = index % 3 === 0;
    const isLastColumn = index % 3 === 2;

    return (
      <PressableBox
        flex={1}
        justifyContent="center"
        alignItems="center"
        paddingVertical="s20"
        borderWidth={0.3}
        borderRightWidth={isFirstColumn ? 0 : 0.3}
        borderLeftWidth={isLastColumn ? 0 : 0.3}>
        <Text>{item}</Text>
      </PressableBox>
    );
  }

  if (isLoading || isError) {
    return <EmptyList error={isError} loading={isLoading} refetch={refetch} />;
  }

  return (
    <>
      {data?.words && (
        <FlatList
          data={data.words}
          keyExtractor={item => item}
          renderItem={renderItem}
          numColumns={3}
          maxToRenderPerBatch={20}
        />
      )}
    </>
  );
}
