import React from 'react';
import { Pressable, View, Text } from 'react-native';
import { RadioProps } from './Radio.types';
import radioStyle from './Radio.style';

const Radio = ({
  disabled = false,
  id,
  label,
  onPress,
  selected = false,
}: RadioProps) => {
  const styles = radioStyle(disabled);

  function handlePress() {
    if (disabled) {
      return null;
    }
    if (onPress) {
      onPress(id);
    }
  }

  return (
    <Pressable onPress={handlePress} style={styles.container}>
      <View style={styles.radio}>
        {selected && <View style={styles.radioSelected} />}
      </View>
      {Boolean(label) && <Text style={styles.radioText}>{label}</Text>}
    </Pressable>
  );
};

export default Radio;
