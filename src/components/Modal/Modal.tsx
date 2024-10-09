import React from 'react';
import {Modal as RNModal} from 'react-native';
import {useModal} from '../../services/modal/useModal';
import {Icon} from '../Icon/Icon';
import {Screen} from '../Screen/Screen';
import {useAppSafeArea} from '../../hooks/useAppSafeArea';
import {useAppTheme} from '../../hooks/useAppTheme';

export function Modal() {
  const {modal, hideModal} = useModal();

  const {top, bottom} = useAppSafeArea();
  const {spacing} = useAppTheme();

  if (!modal) {
    return null;
  }

  const {children: Children, ...modalProps} = modal;

  return (
    <RNModal animationType="slide" {...modalProps}>
      <Screen
        flex={1}
        scrollable
        style={{paddingTop: top, paddingBottom: bottom}}>
        <Icon
          name="close"
          onPress={hideModal}
          style={{
            alignSelf: 'flex-start',
            paddingBottom: spacing.s10,
            zIndex: 999,
          }}
        />

        <Children />
      </Screen>
    </RNModal>
  );
}
