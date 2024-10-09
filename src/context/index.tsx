import React from 'react';
import {ModalProvider} from '../services/modal/modalProvider';
import {FavoriteWordProvider} from '../services/favoriteWord/favoriteWordProvider';

interface Props {
  children: React.ReactNode;
}

export function ContextProviders({children}: Props) {
  return (
    <ModalProvider>
      <FavoriteWordProvider>{children}</FavoriteWordProvider>
    </ModalProvider>
  );
}
