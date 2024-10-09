import React, {createContext, useState} from 'react';
import {ModalProps, ModalService} from './modalTypes';

export const ModalContext = createContext<ModalService>({
  modal: null,
  showModal: () => {},
  hideModal: () => {},
});

export function ModalProvider({children}: React.PropsWithChildren<{}>) {
  const [modal, setModal] = useState<ModalService['modal']>(null);

  function showModal(_modal: ModalProps) {
    setModal({visible: true, ..._modal});
  }

  function hideModal() {
    setModal(null);
  }

  return (
    <ModalContext.Provider value={{modal, showModal, hideModal}}>
      {children}
    </ModalContext.Provider>
  );
}
