import React, {useState} from 'react';
import ConfirmModal from './ConfirmModal';
import {ModalProps} from 'react-native';
import useModals from 'hooks/useModals';

interface ModalsProps {}

/* TODO: 수정해야 */
const Modals = ({}: ModalProps) => {
  const {modals, closeModal} = useModals();

  //모달이 열려서 확인버튼을 눌러을때 처리하는 로직
  const handleClickConfirmButton = () => {
    //비지니스 로직
    closeModal();
  };

  return (
    <>
      <ConfirmModal
        message="삭제하시겠습니까?"
        open={modalOpenState}
        onClose={closeModal}
        onConfirmButtonClick={handleClickConfirmButton}
      />
    </>
  );
};
