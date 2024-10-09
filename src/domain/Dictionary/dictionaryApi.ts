import axios from 'axios';
import {DictionaryApi} from './dictionaryTypes';

async function getWordsList(): Promise<DictionaryApi> {
  const response = await axios.get<DictionaryApi>(
    'https://raw.githubusercontent.com/dwyl/english-words/master/words_dictionary.json',
  );

  return response.data;
}

export const dictionaryApi = {
  getWordsList,
};
