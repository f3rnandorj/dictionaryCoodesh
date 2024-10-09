import {useContext} from 'react';
import {ModalService} from './modalTypes';
import {ModalContext} from './modalProvider';

export function useModal(): ModalService {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error('Modal must be used within a ModalProvider');
  }

  return context;
}
