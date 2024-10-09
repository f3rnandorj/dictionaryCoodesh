import {Word} from '../../domain/Dictionary/dictionaryTypes';

export type FavoriteWordService = {
  favoriteWordList: Word[] | null;
  addWord: (data: Word) => void;
  removeWord: (word: Word['word']) => void;
};
