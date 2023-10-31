import React from 'react';
import {Button, Text} from 'react-native';
import Modal from 'react-native-modal';

interface ModalProps {
  open: boolean;
  onConfirmButtonClick: () => void;
  message: string;
  onClose: () => void;
}

const ConfirmModal = ({
  open,
  onConfirmButtonClick,
  onClose,
  message,
}: ModalProps) => {
  // const [isModalVisible, setModalVisible] = useState(false);

  const handleConfirm = () => {
    //Perform the confirmation action
    onConfirmButtonClick();
    onClose();
  };
  const handleCancel = () => {
    //Handle the cancellation
    onClose();
  };

  return (
    <Modal isVisible={open}>
      <Text>{message}</Text>
      <Button title="Confirm" onPress={handleConfirm} />
      <Button title="Cancel" onPress={handleCancel} />
    </Modal>
  );
};

export default ConfirmModal;
