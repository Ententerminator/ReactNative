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



const CameraPage = ({navigation}) => {
  BackButton(navigation)
  const { hasPermission, requestPermission } = useCameraPermission()
  const [photoPath, setPhotoPath] = useState(null);
  const camera = useRef(null)


  const device = useCameraDevice('back')

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
    style={{
      flex:1,
      height: '100%',
      width: '100%',
    }}>
      <Camera
        style={StyleSheet.absoluteFill}
        device={device}
        isActive={true}
        ref={camera}
        photo={true}
        
      />
      <View
      style={{
        position: 'absolute',
        bottom: 50,
        alignSelf: 'center'
      }}>
      <Button 
        title = "Tak a PICTA"
        color='#fffffff'
        onPress={onPhotoButton}

      />
      </View>
      <View
      style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        alignSelf: 'start'
      }}>
      <Image 
        source={{uri: 'file://' + photoPath}} style={{ width: 100, height: 100, resizeMode: 'contain'}}
      />
      </View>

    </View>
  )
}

  export default CameraPage;