import React from 'react';
import {ModalProvider} from '../services/modal/modalProvider';

interface Props {
  children: React.ReactNode;
}

export function ContextProviders({children}: Props) {
  return <ModalProvider>{children}</ModalProvider>;
}
