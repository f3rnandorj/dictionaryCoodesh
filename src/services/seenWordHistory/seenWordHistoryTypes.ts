import {Word} from '../../domain/Dictionary/dictionaryTypes';

export type SeenWordHistoryService = {
  wordList: Word[] | null;
  addWord: (user: Word) => void;
  removeWord: (userId: Word['word']) => void;
  clearWordList: () => void;
};
