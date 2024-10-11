import {useQuery} from '@tanstack/react-query';
import {QueryKeys} from '../../../infra/infraTypes';
import {dictionaryService} from '../dictionaryService';

export function useDictionaryGetWordsList() {
  const {data, isError, isLoading, refetch} = useQuery({
    queryKey: [QueryKeys.DictionaryWordList],
    queryFn: dictionaryService.getWordsList,
  });

  return {
    data,
    isError: isError || (!isLoading && !data),
    isLoading,
    refetch,
  };
}
