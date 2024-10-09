import {dictionaryAdapter} from './dictionaryAdapter';
import {dictionaryApi} from './dictionaryApi';
import {Dictionary, Word} from './dictionaryTypes';

async function getWordsList(): Promise<Dictionary> {
  const response = await dictionaryApi.getWordsList();

  return dictionaryAdapter.toDictionaryWordsList(response);
}

async function getWordDetails(word: string): Promise<Word> {
  const response = await dictionaryApi.getWordDetails(word);

  return dictionaryAdapter.toWord(response[0]);
}

export const dictionaryService = {
  getWordsList,
  getWordDetails,
};
