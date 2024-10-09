import {ModalProps as RNModalProps} from 'react-native';

export interface ModalService {
  modal: ModalProps | null;
  showModal: (modal: ModalProps) => void;
  hideModal: () => void;
}

export interface ModalProps extends Omit<RNModalProps, 'children'> {
  children: () => React.JSX.Element;
}
