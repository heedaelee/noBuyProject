import {useCallback} from 'react';
import {useRecoilState} from 'recoil';

import {modalOpenAtom} from 'store/modal-open';

const useModals = () => {
  // 모달들의 목록을 보관하는 상태값
  const [modals, setModals] = useRecoilState(modalOpenAtom);

  /* 인자(오픈할 모달 정보 객체)로 모달을 받으면 이를 모달 목록에 (배열의 요소로) 추가하기 */
  const openModal = useCallback(
    modal => {
      setModals(modals => [...modals, modal]);
    },
    [setModals],
  );

  const closeModal = useCallback(() => {
    setModals(false);
  }, [setModals]);

  return {
    modals,
    openModal,
    closeModal,
  };
};

export default useModals;
