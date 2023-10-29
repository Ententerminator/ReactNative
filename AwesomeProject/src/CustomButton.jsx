import React from 'react';
import {Text,TouchableOpacity} from 'react-native';

const CustomButton = ({ onPress, title, icon, buttonStyle, textStyle }) => {
    return(
    <TouchableOpacity
        style={[ buttonStyle, {flexDirection: 'row'}]}
        onPress={onPress}
    >
        {icon}
        <Text style={textStyle}> {title} </Text>
    </TouchableOpacity>

);
}

export default CustomButton;