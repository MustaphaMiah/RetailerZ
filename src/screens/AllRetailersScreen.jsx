import { View, StyleSheet, FlatList } from 'react-native';
import { useData } from '../contexts/DataContext';
import RetailerTile from '../components/RetailerTile';
import { useEffect } from 'react';
import BackButton from '../components/Buttons/BackButton';

const AllRetailersScreen = ({ navigation }) => {
  const { data } = useData();

  const renderItem = ({ item }) => (
    <RetailerTile
      item={item}
      onPress={() => {
        navigation.navigate('Retailer Details', { retailer: item });
      }}
    />
  );

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <BackButton onPress={() => navigation.goBack()} title={'Home Page'} />
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  itemContainer: {
    padding: 15,
    marginVertical: 8,
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
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginBottom: 10,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
});

export default AllRetailersScreen;
