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

const RetrieveData = ({navigation}) => {
  BackButton(navigation)

    return (
    <View>
      <Text > RetrieveData </Text>
    </View>
    );
  }

  export default RetrieveData;