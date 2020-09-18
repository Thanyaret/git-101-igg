import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ResumeFromScreen from './Screen/ResumeForm'
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ResumeFrom" options={{title:'Resume From'}} component={ResumeFromScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
