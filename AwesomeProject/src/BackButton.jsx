import React from 'react';
import {
    StyleSheet,
    Button,
    View,
    Vibration,
    Text,
    Alert,
    PermissionsAndroid
  } from 'react-native';



const BackButton = (navigation) => {
    React.useEffect(() => {
        // Use `setOptions` to update the button that we previously specified
        // Now the button includes an `onPress` handler to update the count
        navigation.setOptions({
          headerLeft: () => (
            <Button onPress={() => {
              Vibration.vibrate(50), 
              navigation.navigate('Home')}} 
              title="Back Up Fam" />
          ),
        });
      }, [navigation]);
}

export default BackButton;