import {useQuery} from 'react-query';
import {QueryKeys} from '../../../infra/infraTypes';
import {dictionaryService} from '../dictionaryService';

export function useDictionaryGetWordsList() {
  const {data, isError, isLoading, refetch} = useQuery(
    QueryKeys.DictionaryWordList,
    dictionaryService.getWordsList,
  );

  return {
    data,
    isError: isError || (!isLoading && !data),
    isLoading,
    refetch,
  };
}
