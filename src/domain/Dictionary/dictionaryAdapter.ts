import {Dictionary, DictionaryApi} from './dictionaryTypes';

function toDictionaryWord(word: DictionaryApi): Dictionary {
  return {
    words: Object.keys(word),
  };
}

export const dictionaryAdapter = {toDictionaryWord};
