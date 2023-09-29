import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { DrawerToggleButton, createDrawerNavigator } from '@react-navigation/drawer';
import { Linking, Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import HomeScreen from './src/HomeScreen';
import Accelerometer from './src/AccelerometerPage';
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
  ActivityIndicator,
} from 'react-native';

const PERSISTENCE_KEY = 'NAVIGATION_STATE_V1';


const Drawer = createDrawerNavigator();

const YourApp = () => {

  const [isReady, setIsReady] = React.useState(false);
  const [initialState, setInitialState] = React.useState();

  React.useEffect(() => {
    const restoreState = async () => {
      try {
        const initialUrl = await Linking.getInitialURL();

        if (Platform.OS !== 'web' && initialUrl == null) {
          // Only restore state if there's no deep link and we're not on web
          const savedStateString = await AsyncStorage.getItem(PERSISTENCE_KEY);
          const state = savedStateString ? JSON.parse(savedStateString) : undefined;

          if (state !== undefined) {
            setInitialState(state);
          }
        }
      } finally {
        setIsReady(true);
      }
    };

    if (!isReady) {
      restoreState();
    }
  }, [isReady]);

  if (!isReady) {
    return <ActivityIndicator />;
  }





  return (
    <NavigationContainer
    initialState={initialState}
    onStateChange={(state) => AsyncStorage.setItem(PERSISTENCE_KEY, JSON.stringify(state))}>
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