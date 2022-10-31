import {StyleSheet} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './src/screens/Login';
import Register from './src/screens/Register';
import ContinuePhone from './src/screens/ContinuePhone';
import Reset from './src/screens/Reset';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, Image, Text} from 'react-native';
import Dashboard from './src/screens/Dashboard';
import SplashScreen from './src/screens/SplashScreen';
import SplashSecond from './src/screens/SplashSecond';
import Statistics from './src/screens/Statistics';

import {NavigationContainer} from '@react-navigation/native';
import Expense from './src/screens/Expense';
import Settings from './src/screens/Settings';
import EditProfile from './src/screens/EditProfile';
import VerifyCode from './src/screens/VerifyCode';
import CreatePassword from './src/screens/CreatePassword';
import Shopping from './src/screens/Shopping';
import History from './src/screens/History';
import NewTransaction from './src/components/NewTransaction';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        activeTintColor: '#00CC52',
        headerShown: false,
        tabBarShowLabel: false,
        showLabel: false,
      }}>
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                source={require('./src/aseets/tabhome.png')}
                style={{
                  height: 24,
                  width: 24,
                  tintColor: focused ? '#00CC52' : '#A3A7B1',
                }}
              />
              <Text
                style={{
                  color: focused ? '#00CC52' : '#A3A7B1',
                  fontSize: 10,
                }}>
                Home
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Statistics"
        component={Statistics}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                source={require('./src/aseets/stats.png')}
                style={{
                  height: 24,
                  width: 24,
                  tintColor: focused ? '#00CC52' : '#A3A7B1',
                }}
              />
              <Text
                style={{
                  color: focused ? '#00CC52' : '#A3A7B1',
                  fontSize: 10,
                }}>
                Statistics
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                source={require('./src/aseets/settings.png')}
                style={{
                  height: 24,
                  width: 24,
                  tintColor: focused ? '#00CC52' : '#A3A7B1',
                }}
              />
              <Text
                style={{
                  color: focused ? '#00CC52' : '#A3A7B1',
                  fontSize: 10,
                }}>
                Settings
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splashscreen" component={SplashScreen} />
        <Stack.Screen name="SplashSecond" component={SplashSecond} />
        <Stack.Screen name="Login" component={Login} />

        <Stack.Screen name="Tabs" component={Tabs} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Expense" component={Expense} />

        <Stack.Screen name="ContinuePhone" component={ContinuePhone} />
        <Stack.Screen name="Reset" component={Reset} />
        <Stack.Screen name="EditProfile" component={EditProfile} />
        <Stack.Screen name="VerifyCode" component={VerifyCode} />
        <Stack.Screen name="CreatePassword" component={CreatePassword} />
        <Stack.Screen name="Shopping" component={Shopping} />
        <Stack.Screen name="History" component={History} />
        <Stack.Screen name="NewTransaction" component={NewTransaction} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
