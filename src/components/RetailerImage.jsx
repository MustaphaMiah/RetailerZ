import { View, Image, StyleSheet } from 'react-native';

const RetailerImage = ({ uri }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri }} style={styles.image} resizeMode='contain' />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.84,
  },
  image: {
    width: '100%',
    height: 150,
  },
});

export default RetailerImage;
