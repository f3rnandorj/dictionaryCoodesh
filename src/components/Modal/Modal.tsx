import React from 'react';
import {Modal as RNModal} from 'react-native';
import {useModal} from '../../services/modal/useModal';
import {Icon} from '../Icon/Icon';
import {Screen} from '../Screen/Screen';

export function Modal() {
  const {modal, hideModal} = useModal();

  if (!modal) {
    return null;
  }

  const {children: Children, ...modalProps} = modal;

  return (
    <RNModal animationType="slide" {...modalProps}>
      <Screen flex={1}>
        <Icon name="close" onPress={hideModal} />

        <Children />
      </Screen>
    </RNModal>
  );
}
