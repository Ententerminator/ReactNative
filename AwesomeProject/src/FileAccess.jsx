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

const FileAccess = ({navigation}) => {
  BackButton(navigation)

    return (
    <View>
      <Text > FileAccess </Text>
    </View>
    );
  }

  export default FileAccess;