import React, {createContext, useEffect, useState} from 'react';
import {storage} from '../storage/storage';
import {Word} from '../../domain/Dictionary/dictionaryTypes';
import {SeenWordHistoryService} from './seenWordHistoryTypes';

export const SeenWordHistoryContext = createContext<SeenWordHistoryService>({
  wordList: null,
  addWord: () => {},
  removeWord: () => {},
  clearWordList: () => {},
});

const key = '@seenWordHistory';

export function SeenWordHistoryProvider({
  children,
}: React.PropsWithChildren<{}>) {
  const [list, setList] = useState<SeenWordHistoryService['wordList'] | null>(
    null,
  );

  const {getItem, setItem, removeItem} = storage;

  async function addWord(data: Word) {
    const storedList = await getItem<Word[]>(key);

    const updatedList = storedList ? [...storedList, data] : [data];

    setList(updatedList);
    setItem(key, updatedList);
  }

  async function removeWord(word: Word['word']) {
    const storedList = await getItem<Word[]>(key);

    const updatedList =
      storedList && storedList.filter(item => item.word !== word);

    setList(updatedList);
    setItem(key, updatedList);
  }

  async function getList() {
    const storedList = await getItem<Word[]>(key);

    if (storedList) {
      setList(storedList);
    } else {
      setList([]);
    }
  }

  async function clearWordList() {
    removeItem(key);
  }

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    getList();
  }, []);

  return (
    <SeenWordHistoryContext.Provider
      value={{wordList: list, addWord, removeWord, clearWordList}}>
      {children}
    </SeenWordHistoryContext.Provider>
  );
}
