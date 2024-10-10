import React from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';
import {Box, PressableBox} from '../../../components/Box/Box';
import {Text} from '../../../components/Text/Text';
import {Icon} from '../../../components/Icon/Icon';
import {useSeenWordHistory} from '../../../services/seenWordHistory/useSeenWordHistory';
import {useModal} from '../../../services/modal/useModal';
import {WordDetails} from '../../WordDetails/WordDetails';

export function HistoryList() {
  const {wordList, removeWord} = useSeenWordHistory();
  const {showModal, hideModal} = useModal();

  function renderItem({item}: ListRenderItemInfo<string>) {
    function handlePressItem() {
      showModal({
        children: () => WordDetails({word: item, hideModal}),
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
      bounces={false}
      data={wordList}
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
