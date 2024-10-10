import React from 'react';
import {WordList} from '../../../components/WordList/WordList';
import {useFavoriteWord} from '../../../services/favoriteWord/useFavoriteWord';
import {Dictionary} from '../../../domain/Dictionary/dictionaryTypes';
import {Box} from '../../../components/Box/Box';
import {Text} from '../../../components/Text/Text';

export function FavoriteList() {
  const {favoriteWordList} = useFavoriteWord();

  if (!favoriteWordList || favoriteWordList.length === 0) {
    return (
      <Box flex={1} justifyContent="center">
        <Text textAlign="center" preset="headingMedium">
          Nenhum favorito adicionado
        </Text>
      </Box>
    );
  }

  const formattedList: Dictionary['words'] = favoriteWordList.map(
    item => item.word,
  );

  return formattedList ? <WordList words={formattedList} /> : null;
}
