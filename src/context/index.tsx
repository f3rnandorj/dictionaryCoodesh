import React from 'react';
import {ModalProvider} from '../services/modal/modalProvider';
import {FavoriteWordProvider} from '../services/favoriteWord/favoriteWordProvider';
import {SeenWordHistoryProvider} from '../services/seenWordHistory/seenWordHistoryProvider';

interface Props {
  children: React.ReactNode;
}

export function ContextProviders({children}: Props) {
  return (
    <ModalProvider>
      <FavoriteWordProvider>
        <SeenWordHistoryProvider>{children}</SeenWordHistoryProvider>
      </FavoriteWordProvider>
    </ModalProvider>
  );
}
