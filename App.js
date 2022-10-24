import * as React from 'react';
import 'react-native-gesture-handler';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SplashScreen from './src/screens/SplashScreen';
import SplashSecond from './src/screens/SplashSecond';
import Dashboard from './src/screens/Dashboard';
import Login from './src/screens/Login';
import Register from './src/screens/Register';
import ContinuePhone from './src/screens/ContinuePhone';
import Expense from './src/screens/Expense';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
const MyDrawer = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Login" component={Login} />
      <Drawer.Screen name="Dashboard" component={Dashboard} />
    </Drawer.Navigator>
  );
};
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="SplashSecond" component={SplashSecond} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="ContinuePhone" component={ContinuePhone} />

        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="Expense" component={Expense} />
        <Stack.Screen name="MyDrawer" component={MyDrawer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
