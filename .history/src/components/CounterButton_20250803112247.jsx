import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import colors from '../constants/colors';

const CounterButton = ({ onPress, title, backgroundColor, textColor }) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: backgroundColor || colors.primary }]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Text style={[styles.buttonText, { color: textColor || colors.onPrimary }]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 50,
    marginVertical: 10,
    elevation: 3,
    minWidth: 200,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CounterButton;