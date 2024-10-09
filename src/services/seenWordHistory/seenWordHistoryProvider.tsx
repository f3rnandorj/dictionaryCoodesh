import React, {createContext, useEffect, useState} from 'react';
import {storage} from '../storage/storage';
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

  async function addWord(word: string) {
    const storedList = await getItem<string[]>(key);

    const filteredList = storedList?.filter(item => item !== word) || [];

    const updatedList = [word, ...filteredList];

    setList(updatedList);
    setItem(key, updatedList);
  }

  async function removeWord(word: string) {
    const storedList = await getItem<string[]>(key);

    const updatedList = storedList && storedList.filter(item => item !== word);

    setList(updatedList);
    setItem(key, updatedList);
  }

  async function getList() {
    const storedList = await getItem<string[]>(key);

    if (storedList) {
      setList(storedList);
    } else {
      setList([]);
    }
  }

  async function clearWordList() {
    removeItem(key);
    setList([]);
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
