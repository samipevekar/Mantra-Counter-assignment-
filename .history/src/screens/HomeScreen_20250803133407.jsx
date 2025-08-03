import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Alert, Text } from 'react-native';
import CounterDisplay from '../components/CounterDisplay';
import CounterButton from '../components/CounterButton';
import TargetInputModal from '../components/TargetInputModal';
import { getData, storeData } from '../utils/storage';
import { useVibration } from '../hooks/useVibration';
import colors from '../constants/colors';

const HomeScreen = () => {
  const [count, setCount] = useState(0);
  const [target, setTarget] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [shouldVibrate, setShouldVibrate] = useState(false);

  useVibration(shouldVibrate);

  useEffect(() => {
    const loadData = async () => {
      const savedCount = await getData('count');
      const savedTarget = await getData('target');
      
      if (savedCount !== null) setCount(savedCount);
      if (savedTarget !== null) setTarget(savedTarget);
    };
    
    loadData();
  }, []);

  useEffect(() => {
    storeData('count', count);
    
    if (target !== null && count >= target && count !== 0) {
      setShouldVibrate(true);
      Alert.alert(
        'Target Reached!',
        `You've reached your target of ${target} mantras.`,
        [
          {
            text: 'OK',
            onPress: () => setShouldVibrate(false),
          },
        ]
      );
    } else {
      setShouldVibrate(false);
    }
  }, [count, target]);

  const incrementCount = () => {
    setCount(prevCount => prevCount + 1);
  };

  const resetCount = () => {
    setCount(0);
  };

  const handleSetTarget = (newTarget) => {
    setTarget(newTarget);
    storeData('target', newTarget);
  };

  const clearTarget = () => {
    setTarget(null);
    storeData('target', null);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Mantra Counter</Text>
      
      <CounterDisplay count={count} target={target} />
      
      <CounterButton
        title="Count Mantra"
        onPress={incrementCount}
      />
      
      <CounterButton
        title="Reset Counter"
        onPress={resetCount}
        backgroundColor={colors.error}
      />
      
      {target ? (
        <CounterButton
          title="Clear Target"
          onPress={clearTarget}
          backgroundColor={colors.secondary}
          textColor={colors.onSecondary}
        />
      ) : (
        <CounterButton
          title="Set Target"
          onPress={() => setModalVisible(true)}
          backgroundColor={colors.secondary}
          textColor={colors.onSecondary}
        />
      )}
      
      <TargetInputModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onSetTarget={handleSetTarget}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: colors.background,
  },
  heading:{
    fontSize: 45,
    fontWeight: 'bold',
    marginBottom: 100,
    color: colors.primary
  }
});

export default HomeScreen;