import React from 'react';
import {Text} from '../Text/Text';
import {FlatList, ListRenderItemInfo} from 'react-native';
import {PressableBox} from '../Box/Box';
import {useModal} from '../../services/modal/useModal';
import {Dictionary} from '../../domain/Dictionary/dictionaryTypes';
import {WordDetails} from '../WordDetails/WordDetails';

interface WordListProps {
  data: Dictionary;
}

export function WordList({data}: WordListProps) {
  const {showModal, hideModal} = useModal();

  function renderItem({item, index}: ListRenderItemInfo<string>) {
    const isFirstColumn = index % 3 === 0;
    const isLastColumn = index % 3 === 2;

    function handlePressItem() {
      showModal({
        children: () => WordDetails({word: item, hideModal}),
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
