export interface Dictionary {
  words: Word['word'][];
}

export interface DictionaryApi {
  [word: string]: number;
}

export interface Word {
  word: string;
  meanings: Meaning[];
  phonetics: Phonetic;
  partOfSpeech: string;
}

export interface WordApi {
  word: string;
  phonetics: Phonetic[];
  meanings: Meaning[];
  license: License;
  sourceUrls: string[];
}

interface License {
  name: string;
  url: string;
}

interface Phonetic {
  text?: string;
  audio?: string;
}

interface Definition {
  definition: string;
  synonyms: string[];
  antonyms: string[];
}

interface Meaning {
  partOfSpeech: string;
  definitions: Definition[];
  synonyms: string[];
  antonyms: string[];
}
