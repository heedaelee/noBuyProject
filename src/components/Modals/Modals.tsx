import React, {Suspense, lazy} from 'react';

import useModals from 'hooks/useModals';
import {Text} from 'react-native';
// import ConfirmModal from './ConfirmModal';

/* 코드스플리팅, 동적import */
const ConfirmModal = lazy(() => import('./ConfirmModal'));

/* 사용할 모달 컴포넌트들을 담은 Object */
export const modals = {
  confirm: ConfirmModal,
};

const Loading = <Text>Loading ....</Text>;

const Modals = () => {
  const {modals} = useModals();
  return (
    <>
      {modals.map(({Component, props}, idx) => {
        return (
          <Suspense key={idx} fallback={Loading}>
            <Component key={idx} {...props} />
          </Suspense>
        );
      })}
    </>
  );
};

export default Modals;
