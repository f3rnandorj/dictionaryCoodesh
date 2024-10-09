import React, {useEffect, useState} from 'react';
import {Text} from '../../../components/Text/Text';
import {FlatList, ListRenderItemInfo} from 'react-native';
import {PressableBox} from '../../../components/Box/Box';

export function WordList() {
  const [words, setWords] = useState<string[]>([]);

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

  useEffect(() => {
    const fetchWords = async () => {
      const response = await fetch(
        'https://raw.githubusercontent.com/dwyl/english-words/master/words_dictionary.json',
      );
      const data = await response.json();
      const wordList = Object.keys(data);
      setWords(wordList);
    };

    fetchWords();
  }, []);

  return (
    <FlatList
      data={words}
      keyExtractor={item => item}
      renderItem={renderItem}
      numColumns={3}
      maxToRenderPerBatch={20}
    />
  );
}
