import {useQuery} from '@tanstack/react-query';
import {QueryKeys} from '../../../infra/infraTypes';
import {dictionaryService} from '../dictionaryService';
import {useEffect, useState} from 'react';

const NUM_OF_ITENS = 100;

export function useDictionaryGetWordsList() {
  const [page, setPage] = useState(0);
  const [data, setData] = useState<string[]>([]);

  const {
    data: allData,
    isError,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: [QueryKeys.DictionaryWordList],
    queryFn: dictionaryService.getWordsList,
  });

  function loadMoreItens() {
    setPage(prevPage => prevPage + 1);
  }

  useEffect(() => {
    if (allData) {
      const itensToAddList = allData.words.splice(
        page * NUM_OF_ITENS,
        NUM_OF_ITENS,
      );

      setData(prevData => [...prevData, ...itensToAddList]);
    }
  }, [allData, page]);

  return {
    data,
    isError: isError || (!isLoading && !data),
    isLoading,
    refetchList: refetch,
    loadMoreItens,
  };
}
