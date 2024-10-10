import React from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';
import {Box, PressableBox} from '../../../components/Box/Box';
import {Text} from '../../../components/Text/Text';
import {Icon} from '../../../components/Icon/Icon';
import {useSeenWordHistory} from '../../../services/seenWordHistory/useSeenWordHistory';
import {useModal} from '../../../services/modal/useModal';
import {WordDetailsScreen} from '../../WordDetailsScreen/WordDetailsScreen';
import {useScrollToTop} from '@react-navigation/native';

export function HistoryList() {
  const {wordList, removeWord} = useSeenWordHistory();
  const {showModal, hideModal} = useModal();

  const flatListRef = React.useRef<FlatList<string>>(null);
  useScrollToTop(flatListRef);

  function renderItem({item}: ListRenderItemInfo<string>) {
    function handlePressItem() {
      showModal({
        children: () =>
          WordDetailsScreen({word: item, hideModal, list: wordList || []}),
      });
    }

    return (
      <PressableBox
        onPress={handlePressItem}
        flexDirection="row"
        justifyContent="space-between"
        padding="s10">
        <Text>{item}</Text>

        <Icon name="trash-can" onPress={() => removeWord(item)} />
      </PressableBox>
    );
  }

  return (
    <FlatList
      ref={flatListRef}
      data={wordList}
      bounces={false}
      renderItem={renderItem}
      ItemSeparatorComponent={ItemSeparatorComponent}
      ListEmptyComponent={listEmptyComponent}
      contentContainerStyle={
        wordList && wordList.length > 0 ? {borderWidth: 1} : {flex: 1}
      }
    />
  );
}

function listEmptyComponent() {
  return (
    <Box flex={1} justifyContent="center">
      <Text textAlign="center" preset="headingMedium">
        Ainda não possui histórico
      </Text>
    </Box>
  );
}

function ItemSeparatorComponent() {
  return <Box borderBottomWidth={1} />;
}
