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

const Contacts = ({navigation}) => {
  BackButton(navigation)

    return (
    <View>
      <Text > Contacts </Text>
    </View>
    );
  }

  export default Contacts;