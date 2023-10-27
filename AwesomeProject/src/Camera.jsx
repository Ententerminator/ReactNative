import React, {useRef, useState} from 'react';
import BackButton from './BackButton'; 
import { Camera, useCameraPermission, useCameraDevice } from 'react-native-vision-camera'
import { CameraRoll } from "@react-native-camera-roll/camera-roll";
import styles from './style';
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
  Image,
} from 'react-native';
import CustomButton from './CustomButton';
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";



const CameraPage = ({navigation}) => {
  BackButton(navigation)
  const { hasPermission, requestPermission } = useCameraPermission()
  const [photoPath, setPhotoPath] = useState(null);
  const camera = useRef(null)


  const device = useCameraDevice('back', sensorOrientation='landscape-left')

  const onPhotoButton = async() => {
    console.log("1");
    const photo = await camera.current.takePhoto();
    console.log("2");
    setPhotoPath(photo.path);
    console.log(photo);
    const galleryPath = await CameraRoll.save(`file://${photo.path}`, {
      type: 'photo',
    })
  console.log(galleryPath)

  }

  if (device == null) return <NoCameraDeviceError />
  return (
    <View
      style={{height: '100%'}}>
      
      <Camera
        style={StyleSheet.absoluteFill}
        device={device}
        isActive={true}
        ref={camera}
        photo={true}
        orientation='portrait'
      />
      <View>
        <Text 
          style={[
            styles.textStyle,
            styles.cameraText,
            {backgroundColor:styles.colors.foregroundColor}
          ]}
        > 
          Take a Picture! :)
        </Text>
      </View>
      <View
      style={styles.cameraButtonPosition}>
        <CustomButton 
          icon={
            <FontAwesomeIcon
                 name="camera" 
                 size = {20} 
                 color= 'white'
              />
          }
          onPress={onPhotoButton}
        />
      </View>
      <View
        style={styles.cameraPreviewImagePosition}>
        <Image 
          source={{uri: 'file://' + photoPath}} 
          style={styles.cameraPreviewImage}
        />
      </View>
    </View>
  )
}

  export default CameraPage;