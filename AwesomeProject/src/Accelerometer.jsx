import React, {useState, useRef, useEffect} from 'react';
import BackButton from './BackButton'; 
import styles from './style';
import { accelerometer, setUpdateIntervalForType, SensorTypes } from 'react-native-sensors';
import {View, Text} from 'react-native';

setUpdateIntervalForType(SensorTypes.accelerometer, 400); // defaults to 100ms

const Accelerometer = ({navigation}) => {
  BackButton(navigation);

  const initialValue = { //4 zeilen
    x: 0,
    y: 0,
    z: 0
  }
  const [sensorValues, setSensorValues] = useState(initialValue);
  const sensorSubscriptionRef = useRef();

  useEffect(() => {
    sensorSubscriptionRef.current = accelerometer.subscribe(  // 2 zeilen
      (values) => {setSensorValues({ ...values });}
    );

    return () => {              // 3 zeilen
      sensorSubscriptionRef.current.unsubscribe();
      sensorSubscriptionRef.current = null;
    };
  });

  return (
    <View style={[styles.viewStyle, styles.viewLiveRow]}>
      <View style={styles.viewLiveColumn}>
        <Text style={styles.textLiveData}> x Axis:  </Text>
        <Text style={styles.textLiveData}> y Axis:  </Text>
        <Text style={styles.textLiveData}> z Axis:  </Text>
      </View>
      <View style={styles.viewLiveColumn}>
        <Text style={styles.textLiveData}> {sensorValues.x.toFixed(5)} </Text>
        <Text style={styles.textLiveData}> {sensorValues.y.toFixed(5)} </Text>
        <Text style={styles.textLiveData}> {sensorValues.z.toFixed(5)} </Text>
      </View>
      
    </View>
    );
  }

  export default Accelerometer; // wird gezählt