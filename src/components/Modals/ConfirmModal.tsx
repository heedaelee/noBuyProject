import {Colors, globalStyles} from 'config/style-config';
import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

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
      <View style={styles.modalView}>
        <View style={styles.textView}>
          <Text style={styles.modalMessageText}>{message}</Text>
        </View>
        <View style={styles.buttonsView}>
          <Pressable style={styles.buttonPressable} onPress={handleCancel}>
            <Text style={styles.buttonText}>취소</Text>
          </Pressable>
          <Pressable style={styles.OkButtonPressable} onPress={handleConfirm}>
            <Text style={styles.buttonText}>확인</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalView: {
    ...globalStyles.contentView,
    flexDirection: 'column',
    minHeight: '35%',
    maxHeight: '50%',
    marginLeft: 18,
    alignItems: 'center',
    backgroundColor: Colors.gray90,
  },
  textView: {
    flex: 4,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonsView: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 5,
    padding: 5,
  },
  buttonPressable: {
    ...globalStyles.buttonPressable,
  },
  OkButtonPressable: {
    ...globalStyles.buttonPressable,
    backgroundColor: Colors.gray20,
  },
  modalMessageText: {
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'Cafe24Dangdanghae-v2.0',
  },
  buttonText: {
    textAlign: 'center',
    color: Colors.gray70,
    fontWeight: 'bold',
    fontFamily: 'Cafe24Dangdanghae-v2.0',
    fontSize: 16,
  },
});

export default ConfirmModal;
