import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import colors from '../constants/colors';

const CounterDisplay = ({ count, target }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.countText}>{count}</Text>
      {target && (
        <Text style={styles.targetText}>Target: {target}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 40,
  },
  countText: {
    fontSize: 72,
    fontWeight: 'bold',
    color: colors.primary,
  },
  targetText: {
    fontSize: 20,
    color: colors.onSurface,
    marginTop: 10,
  },
});

export default CounterDisplay;