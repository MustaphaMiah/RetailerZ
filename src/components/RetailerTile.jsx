import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const RetailerTile = ({ item, onPress }) => {
  return (
    <TouchableOpacity style={styles.itemContainer} onPress={onPress}>
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemLocation}>{item.location}</Text>
      <Text style={styles.itemHours}>{item.opening_hours}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 5,
    borderRadius: 8,
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemLocation: {
    fontSize: 14,
    color: '#6c757d',
  },
  itemHours: {
    fontSize: 14,
    color: '#28a745',
  },
});

export default RetailerTile;
