import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const PrimaryButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity
      style={{ ...styles.button }}
      onPress={onPress}
      accessibilityRole='button'
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#00d287',
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.84,
  },
  buttonText: {
    color: '#085439',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default PrimaryButton;
