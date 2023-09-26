import React from 'react';
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
} from 'react-native';

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

  export default HomeScreen;