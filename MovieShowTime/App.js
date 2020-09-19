import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MovieList from './screens/MovieList'
import MovieDetail from './screens/MovieDetail';

const Stack = createStackNavigator();
const Navigation = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="MovieList"
        component={MovieList}
      />
      <Stack.Screen
        name="MovieDetail"
        component={MovieDetail}
      />
    </Stack.Navigator>
  </NavigationContainer>
)

export default function App() {
  return (
    <View style={styles.container}>
      <Navigation/>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#fff',
    justifyContent:'center'
  },
});