import React from 'react';
import {
    StyleSheet,
    Button,
    View,
    Vibration,
    Text,
    Alert,
    PermissionsAndroid,
  } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import MaterialIconsIcon from "react-native-vector-icons/MaterialIcons"



const BackButton = (navigation) => {
    React.useEffect(() => {
        // Use `setOptions` to update the button that we previously specified
        // Now the button includes an `onPress` handler to update the count
        navigation.setOptions({
          headerLeft: () => (
            // <Button onPress={() => {
            //   Vibration.vibrate(50), 
            //   navigation.navigate('Homepage')}} 
            //   title="Back Up Fam" />
            <TouchableOpacity
              onPress={() => {
                Vibration.vibrate(50), 
                navigation.navigate('Homepage')}}
            >
              <MaterialIconsIcon 
                name="arrow-back"
                color="white"
                size={23}
                style={{
                  left: 17,
                }}
              />
            </TouchableOpacity>

          ),
        });
      }, [navigation]);
}

export default BackButton;