import {QueryKeys} from '../../../infra/infraTypes';
import {errorUtils} from '../../../utils/errorUtils';
import {dictionaryService} from '../dictionaryService';
import {useQuery} from '@tanstack/react-query';

export function useDictionaryGetWordDetails(word: string) {
  const {
    data,
    isError,
    isLoading,
    refetch,
    error: queryError,
  } = useQuery({
    queryKey: [QueryKeys.DictionaryWordDetail, word],
    queryFn: () => dictionaryService.getWordDetails(word),
    enabled: word.length > 0,
    retry: false,
  });

  let error;

  if (queryError) {
    error = {
      message: errorUtils.getErrorMessage(queryError),
      statusCode: errorUtils.getErrorStatusCode(queryError),
    };
  }

  return {
    data,
    error,
    isError,
    isLoading,
    refetch,
  };
}
