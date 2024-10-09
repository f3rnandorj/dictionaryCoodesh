import {Dictionary, DictionaryApi, Word, WordApi} from './dictionaryTypes';

function toDictionaryWordsList(word: DictionaryApi): Dictionary {
  return {
    words: Object.keys(word),
  };
}

function toWord(data: WordApi): Word {
  console.log(data);
  return {
    word: data.word,
    meanings: data.meanings,
    phonetics: data.phonetics[0],
  };
}

export const dictionaryAdapter = {toDictionaryWordsList, toWord};
