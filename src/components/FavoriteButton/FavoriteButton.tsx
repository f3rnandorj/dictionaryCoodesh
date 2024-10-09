import React, {useEffect, useState} from 'react';
import {PressableBox} from '../Box/Box';
import {Icon} from '../Icon/Icon';
import {Text} from '../Text/Text';
import {useFavoriteWord} from '../../services/favoriteWord/useFavoriteWord';
import {Word} from '../../domain/Dictionary/dictionaryTypes';

interface Props {
  data: Word;
}

export function FavoriteButton({data}: Props) {
  const {favoriteWordList, addWord, removeWord} = useFavoriteWord();
  const [isFavoriteWord, setIsFavoriteWord] = useState(false);

  function setFavoriteWord() {
    const isToFavoriteWord = favoriteWordList?.some(
      list => list.word === data.word,
    );

    setIsFavoriteWord(!!isToFavoriteWord);
  }

  function handlePressButton() {
    if (isFavoriteWord) {
      removeWord(data.word);
    } else {
      addWord(data);
    }
  }

  useEffect(() => {
    setFavoriteWord();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [favoriteWordList]);

  return (
    <PressableBox
      onPress={handlePressButton}
      flexDirection="row"
      justifyContent="center"
      alignItems="center"
      hitSlop={20}>
      <Text pr="s10">Adicionar aos favoritos</Text>
      <Icon
        name={isFavoriteWord ? 'star' : 'star-outline'}
        color={isFavoriteWord ? 'starColor' : 'backgroundContrast'}
      />
    </PressableBox>
  );
}
