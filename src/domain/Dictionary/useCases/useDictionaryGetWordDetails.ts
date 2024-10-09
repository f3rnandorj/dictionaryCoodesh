import {useQuery} from 'react-query';
import {QueryKeys} from '../../../infra/infraTypes';
import {dictionaryService} from '../dictionaryService';

export function useDictionaryGetWordDetails(word: string) {
  const {data, isError, isLoading, refetch} = useQuery(
    [QueryKeys.DictionaryWordDetail, word],
    () => dictionaryService.getWordDetails(word),
    {
      enabled: word.length > 0,
    },
  );

  return {
    data,
    isError,
    isLoading,
    refetch,
  };
}
