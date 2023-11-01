import React from 'react';
import {Button, Text} from 'react-native';
import Modal from 'react-native-modal';

interface ModalProps {
  open: boolean;
  onConfirmButtonClick: () => void;
  message: string;
  onCancelButtonClick: () => void;
}

const ConfirmModal = ({
  open,
  onConfirmButtonClick,
  onCancelButtonClick,
  message,
}: ModalProps) => {
  // const [isModalVisible, setModalVisible] = useState(false);

  const handleConfirm = () => {
    //Perform the confirmation action
    onConfirmButtonClick();
    onCancelButtonClick();
  };
  const handleCancel = () => {
    //Handle the cancellation
    onCancelButtonClick();
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
