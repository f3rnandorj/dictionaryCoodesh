export interface Dictionary {
  words: WordEntry['word'][];
}

export interface DictionaryApi {
  [word: string]: number;
}

export interface WordEntry {
  word: string;
}

export interface WordEntryApi {
  word: string;
  phonetic?: string;
  phonetics: Phonetic[];
  origin?: string;
  meanings: Meaning[];
}

interface Phonetic {
  text: string;
  audio?: string;
}

interface Definition {
  definition: string;
  example?: string;
  synonyms: string[];
  antonyms: string[];
}

interface Meaning {
  partOfSpeech: string;
  definitions: Definition[];
}
