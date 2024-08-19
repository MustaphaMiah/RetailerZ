import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import AllRetailersScreen from './src/screens/AllRetailersScreen';
import { DataProvider } from './src/contexts/DataContext';
import RetailerDetailScreen from './src/screens/RetailerDetailScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <DataProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen
            name='Home'
            component={HomeScreen}
            options={{ title: 'Home Page' }}
          />
          <Stack.Screen name='All retailers' component={AllRetailersScreen} />
          <Stack.Screen
            name='Retailer Details'
            component={RetailerDetailScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </DataProvider>
  );
}

export default App;
