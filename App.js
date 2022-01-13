import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './components/login/Login';
import Signup from './components/signup/Signup';
import Main from './components/homescreen/Main';


const Stack = createNativeStackNavigator();
export default function App() {

  return (
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="SignUp" component={Signup} />
          <Stack.Screen name="Tabdonate" component={Main} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}
