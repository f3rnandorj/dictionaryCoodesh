import React from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';
import {Box, PressableBox} from '../../../components/Box/Box';
import {Text} from '../../../components/Text/Text';
import {Icon} from '../../../components/Icon/Icon';
import {useModal} from '../../../services/modal/useModal';
import {WordDetailsScreen} from '../../WordDetailsScreen/WordDetailsScreen';
import {useScrollToTop} from '@react-navigation/native';
import {useFavoriteWord} from '../../../services/favoriteWord/useFavoriteWord';
import {Word} from '../../../domain/Dictionary/dictionaryTypes';

export function FavoriteList() {
  const {favoriteWordList, removeWord} = useFavoriteWord();
  const {showModal, hideModal} = useModal();

  const flatListRef = React.useRef<FlatList<Word>>(null);
  useScrollToTop(flatListRef);

  function renderItem({item}: ListRenderItemInfo<Word>) {
    function handlePressItem() {
      showModal({
        children: () =>
          WordDetailsScreen({
            word: item.word,
            hideModal,
            list: favoriteWordList?.map(listItem => listItem.word) || [],
          }),
      });
    }

    return (
      <PressableBox
        onPress={handlePressItem}
        flexDirection="row"
        justifyContent="space-between"
        padding="s10">
        <Text>{item.word}</Text>

        <Icon
          name="star"
          color="starColor"
          onPress={() => removeWord(item.word)}
        />
      </PressableBox>
    );
  }

  return (
    <FlatList
      ref={flatListRef}
      data={favoriteWordList}
      bounces={false}
      renderItem={renderItem}
      ItemSeparatorComponent={ItemSeparatorComponent}
      ListEmptyComponent={listEmptyComponent}
      contentContainerStyle={
        favoriteWordList && favoriteWordList.length > 0
          ? {borderWidth: 1}
          : {flex: 1}
      }
    />
  );
}

function listEmptyComponent() {
  return (
    <Box flex={1} justifyContent="center">
      <Text textAlign="center" preset="headingMedium">
        Nenhum favorito adicionado
      </Text>
    </Box>
  );
}

function ItemSeparatorComponent() {
  return <Box borderBottomWidth={1} />;
}
