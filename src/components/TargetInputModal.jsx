import React, { useState } from 'react';
import { View, Modal, StyleSheet, TextInput, Text, TouchableOpacity } from 'react-native';
import colors from '../constants/colors';
import CounterButton from './CounterButton';

const TargetInputModal = ({ visible, onClose, onSetTarget }) => {
  const [target, setTarget] = useState('');

  const handleSetTarget = () => {
    const num = parseInt(target, 10);
    if (!isNaN(num) && num > 0) {
      onSetTarget(num);
      setTarget('');
      onClose();
    }
  };

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Set Target</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter target count (e.g., 108)"
            keyboardType="numeric"
            value={target}
            onChangeText={setTarget}
            autoFocus={true}
          />
          <View style={styles.buttonRow}>
            <CounterButton
              title="Cancel"
              onPress={onClose}
              backgroundColor={colors.error}
              style={{ flex: 1, marginRight: 10 }}
            />
            <CounterButton
              title="Set Target"
              onPress={handleSetTarget}
              style={{ flex: 1 }}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: colors.surface,
    padding: 20,
    borderRadius: 10,
    width: '80%',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: colors.onSurface,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 5,
    padding: 15,
    marginBottom: 20,
    fontSize: 16,
  },
  buttonRow: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
});

export default TargetInputModal;