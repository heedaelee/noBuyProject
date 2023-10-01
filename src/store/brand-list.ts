import {atom} from 'recoil';

import {localStorageEffect} from 'store/local-storage-effect';
import {BRAND_LIST_KEY} from 'constants/atom-constant';

export interface BrandItem {
  id: string | number[];
  name: string;
  content: string;
}

export interface BrandList extends Array<BrandItem> {}
export interface initialStateType {
  brandList: BrandList;
  selectedI: BrandItem['id'];
  page: 'editor' | 'register' | 'list';
}

/**
 * 초기값 지정
 */
const initialState: initialStateType = {
  selectedI: '-1',
  page: 'list',
  brandList: [{id: '0', name: '브랜드 이름', content: '등록 사유'}],
};

/**
 * BrandList 입력
 */
export const BrandListState = atom({
  key: BRAND_LIST_KEY,
  default: initialState,
  effects: [localStorageEffect(BRAND_LIST_KEY)],
});
