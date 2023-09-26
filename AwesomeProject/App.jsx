import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
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
} from 'react-native';

const Stack = createNativeStackNavigator();


const HomeScreen = ({navigation}) => {
  return (
  <View>
    <Button
      title="Accelerometer"
      onPress={() =>
        navigation.navigate('Accelerometer')
      }
    />
    <Button
      title="Camera"
      onPress={() =>
        navigation.navigate('Camera')
      }
    />
    <Button
      title="Contacts"
      onPress={() =>
        navigation.navigate('Contacts')
      }
    />
    <Button
      title="FileAccess"
      onPress={() =>
        navigation.navigate('FileAccess')
      }
    />
    <Button
      title="GpsData"
      onPress={() =>
        navigation.navigate('GpsData')
      }
    />
    <Button
      title="RetrieveData"
      onPress={() =>
        navigation.navigate('RetrieveData')
      }
    />
  </View>
  );
}
const ProfileScreen = ({navigation, route}) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{color: 'black'}}>This is {route.params.name}'s profile</Text>
      <Button
        title="Go to Profile... again"
        onPress={() => navigation.push('Profile')}
      />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}

const YourApp = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home"
      screenOptions={{
        title: 'Example App ReactNative',
        headerStyle: {
          backgroundColor: 'blue',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerRight: () => (
        <Button
          onPress={() => alert('This is a button!')}
          title="Info"
          color="#fff"
        />
      ),
      }}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Home'}}
        />
        <Stack.Screen name="Accelerometer" component={Accelerometer} />
        <Stack.Screen name="Camera" component={Camera} />
        <Stack.Screen name="Contacts" component={Contacts} />
        <Stack.Screen name="FileAccess" component={FileAccess} />
        <Stack.Screen name="GpsData" component={GpsData} />
        <Stack.Screen name="RetrieveData" component={RetrieveData} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default YourApp;