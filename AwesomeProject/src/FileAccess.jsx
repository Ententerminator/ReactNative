import React, {useState, useCallback} from 'react';
import BackButton from './BackButton';
import DocumentPicker from 'react-native-document-picker';
import RNFS from 'react-native-fs';
import CustomButton from './CustomButton';
import styles from './style';
import { View, Image, PermissionsAndroid, TextInput } from 'react-native';


PermissionsAndroid.request(
  PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
  {
    title: 'Cool App Storage Permission',
    message: 'Cool App needs access to your Storage ',
    buttonNeutral: 'Ask Me Later',
    buttonNegative: 'Cancel',
    buttonPositive: 'OK',
  },
  ).catch ((err) => {
  console.warn(err);
  }
);

const FileAccess = ({navigation}) => {
  BackButton(navigation);

  const [fileResponse, setFileResponse] = useState();
  const [fileName, setFileName] = useState('');

  const filePath = RNFS.DocumentDirectoryPath + "/" + fileName + ".txt"; //absolute path of our file

  const handleDocumentSelection = useCallback(async () => {
    try {
      const response = await DocumentPicker.pick({});
      setFileResponse(response);
    } catch (err) {
      console.warn(err);
    }
  }, []); //nicht gezählt

  const makeFile = async () => {
    try {
      await RNFS.writeFile(filePath, "This is a Text file", "utf8");      
    } catch (error) { 
      console.log(error);
    }
  };

    return (
    <View style={styles.viewStyle}>
      <TextInput
        style={styles.textInput}
        placeholder="Enter Filename"
        onChangeText={newText => setFileName(newText)}
        defaultValue={fileName}
      />
      <CustomButton 
        buttonStyle={[styles.button, {background: styles.colors.foregroundColor}]} 
        textStyle={styles.textStyle}
        title="Make File with Filname" 
        onPress={makeFile} 
      />
      <CustomButton 
        buttonStyle={[styles.button, {background: styles.colors.foregroundColor}]} 
        textStyle={styles.textStyle}
        title="Pick and Open File" 
        onPress={handleDocumentSelection} 
      />
      {fileResponse && (
        <Image
          source={{uri: fileResponse[0].uri}}
          style={[styles.retrieveDataImage, {marginTop: 20}]}
        />
      )}
    </View>
    );
  }

  export default FileAccess;