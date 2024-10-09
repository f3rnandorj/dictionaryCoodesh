import {dictionaryAdapter} from './dictionaryAdapter';
import {dictionaryApi} from './dictionaryApi';
import {Dictionary} from './dictionaryTypes';

async function getWordsList(): Promise<Dictionary> {
  const response = await dictionaryApi.getWordsList();

  return dictionaryAdapter.toDictionaryWord(response);
}

export const dictionaryService = {
  getWordsList,
};
