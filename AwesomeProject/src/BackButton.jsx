import React from 'react';
import { Vibration } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import MaterialIconsIcon from "react-native-vector-icons/MaterialIcons"



const BackButton = (navigation) => {
    React.useEffect(() => {
        navigation.setOptions({
          headerLeft: () => (
            <TouchableOpacity       //4 zeilen
              onPress={() => {
                Vibration.vibrate(50);
                navigation.navigate('Homepage');
              }}
            >
              <MaterialIconsIcon 
                name="arrow-back"
                color="white"
                size={23}
                style={{left: 17}}
              />
            </TouchableOpacity>
          ),
        });
    }, [navigation]);     //wird gezählt
}

export default BackButton;  //wird gezählt