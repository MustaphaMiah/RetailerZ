import { View, Text, StyleSheet } from 'react-native';
import RetailerImage from '../components/RetailerImage';
import PrimaryButton from '../components/Buttons/PrimaryButton';
import { useEffect } from 'react';
import BackButton from '../components/Buttons/BackButton';

const RetailerDetailScreen = ({ route, navigation }) => {
  const { retailer } = route.params;

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <BackButton onPress={() => navigation.goBack()} title={'Go Back'} />
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{retailer.name}</Text>
      <RetailerImage uri={retailer.img_url} />
      <Text style={styles.location}>Location: {retailer.location}</Text>
      <Text style={styles.hours}>Hours: {retailer.opening_hours}</Text>
      <Text style={styles.address}>Address: {retailer.address}</Text>
      <PrimaryButton
        title='Home Page'
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  location: {
    fontSize: 18,
    color: '#6c757d',
    marginTop: 20,
  },
  hours: {
    fontSize: 16,
    color: '#28a745',
  },
  address: {
    fontSize: 14,
    marginTop: 10,
    marginBottom: 20,
  },
});

export default RetailerDetailScreen;
