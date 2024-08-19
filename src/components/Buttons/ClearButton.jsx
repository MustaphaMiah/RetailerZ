import { TouchableOpacity, StyleSheet } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const ClearButton = ({ onPress }) => {
  return (
    <TouchableOpacity
      style={styles.clearButton}
      onPress={onPress}
      testID='clear-button'
    >
      <MaterialIcons name='clear' size={24} color='black' />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  clearButton: {
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#e74c3c',
  },
});

export default ClearButton;
