import {Dictionary, DictionaryApi} from './dictionaryTypes';

function toDictionaryWord(word: DictionaryApi): Dictionary {
  return {
    word: Object.keys(word),
  };
}

export const dictionaryAdapter = {toDictionaryWord};
