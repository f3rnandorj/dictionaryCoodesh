export type SeenWordHistoryService = {
  wordList: string[] | null;
  addWord: (word: string) => void;
  removeWord: (word: string) => void;
  clearWordList: () => void;
};
