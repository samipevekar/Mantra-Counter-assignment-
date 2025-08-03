import { useEffect } from 'react';
import { Vibration } from 'react-native';

export const useVibration = (shouldVibrate) => {
  useEffect(() => {
    if (shouldVibrate) {
      Vibration.vibrate([500, 500, 500]);
    }
  }, [shouldVibrate]);
};