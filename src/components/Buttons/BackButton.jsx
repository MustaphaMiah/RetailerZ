import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';

const BackButton = ({ onPress, title }) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
      accessibilityRole='button'
    >
      <AntDesign name='arrowleft' size={12} color='black' />
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#00d287',
    borderRadius: 5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  buttonText: {
    color: '#085439',
    fontSize: 10,
    fontWeight: 'bold',
    marginLeft: 4,
  },
});

export default BackButton;
