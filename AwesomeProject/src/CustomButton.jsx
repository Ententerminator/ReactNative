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
import MaterialIconsIcon from "react-native-vector-icons/MaterialIcons";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";


const CustomButton = ({ 
    onPress,
    title,
    icon
}) => {
    return(
    <TouchableOpacity
    style={{flexDirection: 'row'}}
        onPress={onPress}
    >
        {icon}
        <Text> {title} </Text>
    </TouchableOpacity>

);
}

export default CustomButton;