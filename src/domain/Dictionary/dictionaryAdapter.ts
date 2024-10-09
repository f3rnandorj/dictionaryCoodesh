import {Dictionary, DictionaryApi, Word, WordApi} from './dictionaryTypes';

function toDictionaryWordsList(word: DictionaryApi): Dictionary {
  return {
    words: Object.keys(word),
  };
}

function toWord(data: WordApi): Word {
  return {
    word: data.word,
    meanings: data.meanings,
    phonetics: data.phonetics[0],
    partOfSpeech: data.meanings[0].partOfSpeech,
  };
}

export const dictionaryAdapter = {toDictionaryWordsList, toWord};
