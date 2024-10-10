import React from 'react';
import {Text} from '../../../components/Text/Text';
import {FlatList, ListRenderItemInfo} from 'react-native';
import {PressableBox} from '../../../components/Box/Box';
import {useModal} from '../../../services/modal/useModal';
import {Dictionary} from '../../../domain/Dictionary/dictionaryTypes';
import {WordDetailsScreen} from '../../WordDetailsScreen/WordDetailsScreen';
import {useScrollToTop} from '@react-navigation/native';

interface HomeListProps {
  words: Dictionary['words'];
  onPressItem?: (word: string) => void;
}

export function HomeList({words, onPressItem}: HomeListProps) {
  const {showModal, hideModal} = useModal();

  const flatListRef = React.useRef<FlatList<string>>(null);
  useScrollToTop(flatListRef);

  function renderItem({item, index}: ListRenderItemInfo<string>) {
    const isFirstColumn = index % 3 === 0;
    const isLastColumn = index % 3 === 2;

    function handlePressItem() {
      onPressItem && onPressItem(item);

      showModal({
        children: () => WordDetailsScreen({word: item, hideModal}),
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
      {words && (
        <FlatList
          ref={flatListRef}
          data={words}
          keyExtractor={item => item}
          renderItem={renderItem}
          numColumns={3}
          maxToRenderPerBatch={20}
        />
      )}
    </>
  );
}
