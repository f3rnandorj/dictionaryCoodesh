import React from 'react';
import {Text} from '../../../components/Text/Text';
import {FlatList, ListRenderItemInfo} from 'react-native';
import {PressableBox} from '../../../components/Box/Box';
import {useDictionaryGetWordsList} from '../../../domain/Dictionary/useCases/useDictionaryGetWordsList';
import {EmptyData} from './EmptyData';
import {useModal} from '../../../services/modal/useModal';
import {WordDetails} from './WordDetails';

export function WordList() {
  const {data, isError, isLoading, refetch} = useDictionaryGetWordsList();

  const {showModal} = useModal();

  function renderItem({item, index}: ListRenderItemInfo<string>) {
    const isFirstColumn = index % 3 === 0;
    const isLastColumn = index % 3 === 2;

    function handlePressItem() {
      showModal({
        children: () => WordDetails({word: item}),
      });
    }

    return (
      <PressableBox
        flex={1}
        justifyContent="center"
        alignItems="center"
        height={90}
        paddingHorizontal="s12"
        borderWidth={0.3}
        borderRightWidth={isFirstColumn ? 0 : 0.3}
        borderLeftWidth={isLastColumn ? 0 : 0.3}
        onPress={handlePressItem}>
        <Text>{item}</Text>
      </PressableBox>
    );
  }

  if (isLoading || isError) {
    return <EmptyData error={isError} loading={isLoading} refetch={refetch} />;
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
