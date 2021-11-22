import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Home from './views/Home';
import ShowPolls from './views/ShowPolls';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ShowQuestion from './views/ShowQuestion';
import CreatePoll from './views/CreatePoll';
import { PollDataProvider } from './Context/PollContext';

const Stack = createNativeStackNavigator();

const App = () => {
    return (
    <PollDataProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={Home}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="ShowPolls"
              component={ShowPolls}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="ShowQuestion"
              component={ShowQuestion}
              options={{headerShown: false}}
            />
            <Stack.Screen
                name="CreatePoll"
                component={CreatePoll}
                options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>

        </PollDataProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  mainScreen: {
    padding: 10,
  },
  heading: {
    fontFamily: 'Sans',
    fontWeight: 'bold',
    fontSize: 30,
  },
});
