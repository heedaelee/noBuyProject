import {atom} from 'recoil';

import {localStorageEffect} from 'store/local-storage-effect';
import {BRAND_LIST_KEY} from 'constants/atom-constant';

export interface BrandItem {
  brand: string;
  content: string;
}
export interface BrandList extends Array<BrandItem> {}

/**
 * 초기값 지정
 */
const initialState: BrandList = [
  {
    brand: '',
    content: '',
  },
];

/**
 * BrandList 입력
 */
export const BrandListState = atom({
  key: BRAND_LIST_KEY,
  default: initialState,
  effects: [localStorageEffect(BRAND_LIST_KEY)],
});
