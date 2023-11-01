import {ComponentProps, FunctionComponent} from 'react';

import {MODAL_OPEN_KEY} from 'constants/atom-constant';
import {atom} from 'recoil';

interface ModalAtomType {
  Component: FunctionComponent<any>;
  props: ComponentProps<FunctionComponent<any>>;
}

export const modalOpenAtom = atom<Array<ModalAtomType>>({
  key: MODAL_OPEN_KEY,
  default: [],
});
