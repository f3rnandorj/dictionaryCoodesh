export enum QueryKeys {
  DictionaryWordList = 'DictionaryWordList',
  DictionaryWordDetail = 'DictionaryWordDetail',
}

interface ErrorObject {
  statusCode: number | null;
  message: string;
}

export interface Options<TData> {
  onSuccess?: (data: TData) => void;
  onError?: (error: ErrorObject) => void;
  errorMessage?: string;
}
