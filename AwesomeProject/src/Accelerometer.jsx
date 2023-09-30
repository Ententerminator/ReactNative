import React from 'react';
import BackButton from './BackButton'; 
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
} from 'react-native';

const Accelerometer = ({navigation}) => {
  BackButton(navigation)

    return (
    <View>
      <Text > Accelerometer </Text>
    </View>
    );
  }

  export default Accelerometer;