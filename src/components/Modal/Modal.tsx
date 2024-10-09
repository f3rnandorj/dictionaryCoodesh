import React from 'react';
import {Modal as RNModal} from 'react-native';
import {useModal} from '../../services/modal/useModal';

export function Modal() {
  const {modal} = useModal();

  if (!modal) {
    return null;
  }

  const {children: Children, ...modalProps} = modal;

  return (
    <RNModal {...modalProps}>
      <Children />
    </RNModal>
  );
}
