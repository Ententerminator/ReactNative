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

const GpsData = ({navigation}) => {
  BackButton(navigation)

    return (
    <View>
      <Text > GpsData </Text>
    </View>
    );
  }

  export default GpsData;