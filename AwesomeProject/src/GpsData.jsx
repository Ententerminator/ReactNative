import React, {useState, useEffect} from 'react';
import Geolocation, { clearWatch } from 'react-native-geolocation-service';
import BackButton from './BackButton'; 
import styles from './style';
import { View, Text, PermissionsAndroid } from 'react-native';


PermissionsAndroid.request(
  PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
  {
    title: 'Geolocation Permission',
    message: 'May we inquire the whereabouts of thine castle?',
    buttonNeutral: 'Too soon',
    buttonNegative: 'No way?',
    buttonPositive: 'Sure Thang',
  }
  ).catch ((err) => {
    console.warn(err);
  }
);

const GpsData = ({navigation}) => {
  BackButton(navigation);

  const initialValue = {
    latitude: 0,
    longitude: 0,
  }
 
  const [location, setLocation] = useState(initialValue);
  let watchID = null;

  const getPosition = () => {
    return Geolocation.watchPosition(
      (position) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        }) 
      }, 
      (error) => {
        console.log(error.code, error.message);
      },
      {
        interval: 2000,
        enableHighAccuracy: true,
        distanceFilter: 0,
      }
    )
  }

  useEffect(() => {
    watchID = getPosition();

    return () => {
      clearWatch(watchID);
    };
  }, []);

    return (
    <View style={[styles.viewStyle, styles.viewLiveRow]}>
      <View style={styles.viewLiveColumn}>
        <Text style={styles.textLiveData}> Latitude: </Text>
        <Text style={styles.textLiveData}> Longitude: </Text>
      </View>
      <View style={styles.viewLiveColumn}>
        <Text style={styles.textLiveData}> {location.latitude} </Text>
        <Text style={styles.textLiveData}> {location.longitude} </Text>
      </View>
    </View>
    );
  }

  export default GpsData;