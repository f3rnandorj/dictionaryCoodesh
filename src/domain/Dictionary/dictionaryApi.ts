import axios from 'axios';
import {DictionaryApi, WordApi} from './dictionaryTypes';
import {api} from '../../api/apiConfig';

async function getWordsList(): Promise<DictionaryApi> {
  const response = await axios.get<DictionaryApi>(
    'https://raw.githubusercontent.com/dwyl/english-words/master/words_dictionary.json',
  );

  return response.data;
}

async function getWordDetails(word: string): Promise<WordApi[]> {
  const response = await api.get<WordApi[]>(`api/v2/entries/en/${word}`);

  return response.data;
}

export const dictionaryApi = {
  getWordsList,
  getWordDetails,
};
