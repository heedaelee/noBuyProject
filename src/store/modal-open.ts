import {MODAL_OPEN_KEY} from 'constants/atom-constant';
import {atom} from 'recoil';

export const modalOpenAtom = atom({
  key: MODAL_OPEN_KEY,
  default: [],
});
