import {ComponentProps, FunctionComponent, useCallback} from 'react';
import {useRecoilState} from 'recoil';

import {modalOpenAtom} from 'store/modal-open';

const useModals = () => {
  // 모달들의 목록을 보관하는 상태값
  const [modals, setModals] = useRecoilState(modalOpenAtom);

  /**
   * 인자로 모달을 받으면 이를 모달 목록에 (배열의 요소로) 추가하기
   * 인자는 (오픈할 모달 정보 객체, 컴포넌트 형태로 들어감)
   */
  const openModal = useCallback(
    <T extends FunctionComponent<any>>(
      Component: T,
      props: Omit<ComponentProps<T>, 'open'>,
    ) => {
      setModals(modalsPrev => [
        ...modalsPrev,
        {Component, props: {...props, open: true}},
      ]);
    },
    [setModals],
  );

  const closeModal = useCallback(
    <T extends FunctionComponent<any>>(Component: T) => {
      setModals(modals =>
        modals.filter(modal => modal.Component !== Component),
      );
    },
    [setModals],
  );

  return {
    modals,
    openModal,
    closeModal,
  };
};

export default useModals;
