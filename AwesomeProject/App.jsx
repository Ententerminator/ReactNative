import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { DrawerToggleButton, createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './src/HomeScreen';
import Accelerometer from './src/Accelerometer';
import Camera from './src/Camera';
import Contacts from './src/Contacts';
import FileAccess from './src/FileAccess';
import GpsData from './src/GpsData';
import RetrieveData from './src/RetrieveData';
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
  TouchableOpacity,
} from 'react-native';

const Drawer = createDrawerNavigator();

const YourApp = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home"
      backBehavior='history'
      screenOptions={{
        title: 'Example App ReactNative',
        headerStyle: {
          backgroundColor: 'blue',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        drawerPosition: 'right',
        swipeEnabled: false,
        headerLeft: () => <Button title="Go back"/>,
        headerRight: () => <DrawerToggleButton tintColor='white' />,
      }}>
        <Drawer.Screen
          name="Home"
          component={HomeScreen}
          options={{
            drawerLabel: 'Home',
            headerLeft: false}}
        />
        <Drawer.Screen name="Accelerometer" 
          component={Accelerometer} 
          options={{
            drawerLabel: 'Accelerometer',
        }}
          />
        <Drawer.Screen name="Camera" 
          component={Camera} 
          options={{
            drawerLabel: 'Camera'}}
        />
        <Drawer.Screen name="Contacts" 
        component={Contacts} 
          options={{
            drawerLabel: 'Contacts'}}
        />
        <Drawer.Screen name="FileAccess" 
        component={FileAccess} 
          options={{
            drawerLabel: 'FileAccess'}}
        />
        <Drawer.Screen name="GpsData" 
        component={GpsData} 
          options={{
            drawerLabel: 'GpsData'}}
        />
        <Drawer.Screen name="RetrieveData" 
        component={RetrieveData} 
          options={{
            drawerLabel: 'RetrieveData'}}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default YourApp;