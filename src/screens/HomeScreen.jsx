import { View, FlatList } from 'react-native';
import SearchBar from '../components/SearchBar';
import { useState } from 'react';
import { StyleSheet } from 'react-native';
import { useData } from '../contexts/DataContext';
import PrimaryButton from '../components/Buttons/PrimaryButton';
import RetailerTile from '../components/RetailerTile';

const HomeScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const { data, error } = useData();

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderItem = ({ item }) => (
    <RetailerTile
      item={item}
      onPress={() => {
        navigation.navigate('Retailer Details', { retailer: item });
      }}
    />
  );

  return (
    <View style={styles.container}>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <PrimaryButton
        title='See all retailers'
        onPress={() => navigation.navigate('All retailers')}
      />
      {searchQuery.length > 0 && (
        <FlatList
          data={filteredData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      )}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
  },
  itemContainer: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
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
  imageContainer: {
    marginTop: 10,
    height: 100,
    width: '100%',
  },
  image: {
    height: '100%',
    width: '100%',
    borderRadius: 8,
  },
});
