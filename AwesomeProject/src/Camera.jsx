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

const Camera = ({navigation}) => {
  BackButton(navigation)

    return (
    <View>
      <Text > Camera </Text>
    </View>
    );
  }

  export default Camera;