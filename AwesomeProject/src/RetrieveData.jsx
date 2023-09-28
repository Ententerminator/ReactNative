import React, {Component, useEffect, useState} from 'react';
import BackButton from './BackButton'; 
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  ActivityIndicator,
  FlatList,
  Image
} from 'react-native';

const RetrieveData = ({navigation}) => {
  BackButton(navigation)

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getDog = async () => {
    try {
      const response = await fetch('https://dog.ceo/api/breeds/image/random');
      const json = await response.json();
      setData(json.message);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getDog();
  }, []);

  return (
    <View style={{flex: 1, padding: 24, justifyContent: 'center', alignItems: 'center'}}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <View>
        <Image source={{uri: data}} style={{ width: 400, height: 500, resizeMode: 'contain'}}/>
        </View>

      )}
    </View>
  );
};

  export default RetrieveData;