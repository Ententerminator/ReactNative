import React from 'react';
import styles from './style'
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
  Vibration,
  TouchableOpacity
} from 'react-native';


const HomepageButton = ({
  title,
  navigation
}) => {
  return (
    <TouchableOpacity
      onPress={() =>
        {
          Vibration.vibrate(50);
          navigation.navigate(title);
        }
      }
      style={[styles.button, styles.homepageButton]}
    >
    <Text style={styles.textStyle}> {title} </Text>
    </TouchableOpacity>
  );
}

const HomeScreen = ({navigation}) => {
  return (
  <View style = {[styles.viewStyle]}>
    <View style={styles.viewRow}>
      <HomepageButton title="Accelerometer" navigation= {navigation} />
      <HomepageButton title="Camera" navigation= {navigation} />
    </View>
    <View style={styles.viewRow}>
      <HomepageButton title="Contacts" navigation= {navigation} />
      <HomepageButton title="FileAccess" navigation= {navigation} />
    </View>
    <View style={styles.viewRow}>
      <HomepageButton title="GpsData" navigation= {navigation} />
      <HomepageButton title="RetrieveData" navigation= {navigation} />
    </View>
  </View>
  );
}

  export default HomeScreen;