import { View, TextInput, StyleSheet } from 'react-native';
import ClearButton from './Buttons/ClearButton';

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  const clearSearch = () => {
    setSearchQuery('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder='Search...'
        value={searchQuery}
        onChangeText={setSearchQuery}
        placeholderTextColor='#888'
      />
      {searchQuery.length > 0 && <ClearButton onPress={clearSearch} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    padding: 10,
    margin: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.84,
  },
  input: {
    flex: 1,
    height: 40,
    fontSize: 16,
    paddingHorizontal: 10,
    color: '#333',
  },
  clearButton: {
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#e74c3c',
  },
  clearButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default SearchBar;
