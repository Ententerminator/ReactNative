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
import MaterialIconsIcon from "react-native-vector-icons/MaterialIcons"

const CustomButton = (
    onPress,
    title,
    icon,
    iconColor,
    iconSize
) => {
    <TouchableOpacity
        onPress={onPress}
    >
        <MaterialIconsIcon 
            name={icon}
            color={iconColor}
            size={iconSize}
        />
        <Text> {title} </Text>
    </TouchableOpacity>

         
}
export default CustomButton;