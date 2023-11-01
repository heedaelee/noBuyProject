import React from 'react';

import useModals from 'hooks/useModals';
import ConfirmModal from './ConfirmModal';

/* 사용할 모달 컴포넌트들을 담은 Object */
export const modals = {
  confirm: ConfirmModal,
};

const Modals = () => {
  const {modals} = useModals();
  return (
    <>
      {modals.map(({Component, props}, idx) => {
        return <Component key={idx} {...props} />;
      })}
    </>
  );
};

export default Modals;
