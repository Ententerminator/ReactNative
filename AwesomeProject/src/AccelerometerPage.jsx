import React, {useState, useEffect} from 'react';
import BackButton from './BackButton';
import { Accelerometer } from 'expo-sensors';
import {
  View,
  Text,
} from 'react-native';


const AccelerometerPage = ({navigation}) => {
  BackButton(navigation)

  const [ { x, y, z}, setData] = useState({ x: 0, y: 0, z: 0 });
  
  useEffect(() => {
    const subscription = Accelerometer.addListener(setData);
    return () => subscription.remove();
  }, []);

  return (
    <View>
      <Text>x: {x}</Text>
      <Text>y: {y}</Text>
      <Text>z: {z}</Text>
    </View>
  );
}

  export default AccelerometerPage;