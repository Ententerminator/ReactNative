import React from 'react';
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
  Vibration
} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
  <View>
    <Button
      title="Accelerometer"
      onPress={() =>
        {
          Vibration.vibrate(50),
          navigation.navigate('Accelerometer')
          }
      }
    />
    <Button
      title="Camera"
      onPress={() =>
        {
          Vibration.vibrate(50),
        navigation.navigate('Camera')
        }
      }
    />
    <Button
      title="Contacts"
      onPress={() =>
        {
          Vibration.vibrate(50),
        navigation.navigate('Contacts')
        }
      }
    />
    <Button
      title="FileAccess"
      onPress={() =>
        {
          Vibration.vibrate(50),
        navigation.navigate('FileAccess')
        }
      }
    />
    <Button
      title="GpsData"
      onPress={() =>
        {
          Vibration.vibrate(50),
        navigation.navigate('GpsData')
        }
      }
    />
    <Button
      title="RetrieveData"
      onPress={() =>
        {
          Vibration.vibrate(50),
        navigation.navigate('RetrieveData')
        }
      }
    />
  </View>
  );
}

  export default HomeScreen;