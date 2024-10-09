import {useContext} from 'react';
import {SeenWordHistoryContext} from './seenWordHistoryProvider';

export function useSeenWordHistory() {
  const context = useContext(SeenWordHistoryContext);

  if (!context) {
    throw new Error(
      'Seen word history must be used within a SeenWordHistoryProvider',
    );
  }

  return context;
}
