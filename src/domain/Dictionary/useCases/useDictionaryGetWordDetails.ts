import {useQuery} from 'react-query';
import {Options, QueryKeys} from '../../../infra/infraTypes';
import {dictionaryService} from '../dictionaryService';
import {errorUtils} from '../../../utils/errorUtils';
import {Word} from '../dictionaryTypes';

export function useDictionaryGetWordDetails(
  word: string,
  options?: Options<Word>,
) {
  const {data, isError, isLoading, refetch} = useQuery(
    [QueryKeys.DictionaryWordDetail, word],
    () => dictionaryService.getWordDetails(word),
    {
      enabled: word.length > 0,
      retry: false,
      onSuccess: details => {
        if (options?.onSuccess) {
          options?.onSuccess(details);
        }
      },
      onError: error => {
        if (options?.onError) {
          options?.onError({
            message: errorUtils.getErrorMessage(error),
            statusCode: errorUtils.getErrorStatusCode(error),
          });
        }
      },
    },
  );

  return {
    data,
    isError,
    isLoading,
    refetch,
  };
}
