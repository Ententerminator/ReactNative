import React, {useState, useRef, useEffect} from 'react';
import BackButton from './BackButton'; 
import { accelerometer,
         setUpdateIntervalForType,
        SensorTypes } from 'react-native-sensors';
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
} from 'react-native';

setUpdateIntervalForType(SensorTypes.accelerometer, 400); // defaults to 100ms

const Accelerometer = ({navigation}) => {
  BackButton(navigation)

  const initialValue = {
    x: 0,
    y: 0,
    z: 0
  }
//sensor[accelerometer]
    const [sensorValues, setSensorValues] = useState(initialValue);
    const sensorSubscriptionRef = useRef();

    useEffect(() => {
      sensorSubscriptionRef.current = accelerometer.subscribe((values) => {
        setSensorValues({ ...values });
      });

      return () => {
        sensorSubscriptionRef.current.unsubscribe();
        sensorSubscriptionRef.current = null;
      };
    }, []);

    return (
    <View>
      <Text > Accelerometer </Text>
      <Text> x: {sensorValues.x} </Text>
      <Text> y: {sensorValues.y} </Text>
      <Text> z: {sensorValues.z} </Text>
    </View>
    );
  }

  export default Accelerometer;