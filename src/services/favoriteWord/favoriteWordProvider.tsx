import React, {createContext, useEffect, useState} from 'react';
import {FavoriteWordService} from './favoriteWordTypes';
import {storage} from '../storage/storage';
import {Word} from '../../domain/Dictionary/dictionaryTypes';

export const FavoriteWordContext = createContext<FavoriteWordService>({
  favoriteWordList: null,
  addWord: () => {},
  removeWord: () => {},
});

const key = '@favoriteWord';

export function FavoriteWordProvider({children}: React.PropsWithChildren<{}>) {
  const [list, setList] = useState<
    FavoriteWordService['favoriteWordList'] | null
  >(null);

  const {getItem, setItem} = storage;

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

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    getList();
  }, []);

  return (
    <FavoriteWordContext.Provider
      value={{favoriteWordList: list, addWord, removeWord}}>
      {children}
    </FavoriteWordContext.Provider>
  );
}
