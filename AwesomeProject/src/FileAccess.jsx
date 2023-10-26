import React, {useState, useCallback, useEffect} from 'react';
import BackButton from './BackButton';
import DocumentPicker from 'react-native-document-picker';
import RNFS from 'react-native-fs';
import CustomButton from './CustomButton';
import styles from './style';
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
  Image,
  PermissionsAndroid,
  TextInput
} from 'react-native';


const requestStoragePermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      {
        title: 'Cool Photo App Storage Permission',
        message:
          'Cool Photo App needs access to your Storage ' +
          'so you can take awesome files.',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('You can use the Storage');
    } else {
      console.log('Storage permission denied');
    }
  } catch (err) {
    console.warn(err);
  }
};


const FileAccess = ({navigation}) => {
  BackButton(navigation)
  let result = '';
  var RNFS = require('react-native-fs');

  const [fileResponse, setFileResponse] = useState();
  const [externalDirectory, setExternalDirectory] = useState('');
  const [content, setContent] = useState('');
  const [directory, setDirectory] = useState('');
  const [fileName, setFileName] = useState('');



  const filePath = RNFS.DocumentDirectoryPath + "/" + fileName + ".txt"; //absolute path of our file

  const fileContent = "Why do programmers wear glasses? \n They can't C#!";

  const handleDocumentSelection = useCallback(async () => {
    try {
      const response = await DocumentPicker.pick({});
      setFileResponse(response);
    } catch (err) {
      console.warn(err);
    }
  }, []);

  const makeFile = async () => {
    try {
      //create a file at filePath. Write the content data to it
      await RNFS.writeFile(filePath, fileContent, "utf8")
      .then((success) => {
        console.log('FILED2!');})
    } catch (error) { //if the function throws an error, log it out.
      console.log(error);
    }
  };

  const writeFile = async () => {
    try {
      //create a file at filePath. Write the content data to it
      await RNFS.write(filePath, 'something new is here', -1, "utf8")
      .then((success) => {
        console.log('WRITTEN!');})
    } catch (error) { //if the function throws an error, log it out.
      console.log(error);
    }
  };

  const readFile = async () => {
    try {
      //create a file at filePath. Write the content data to it
      await RNFS.readFile(filePath, "utf8")
      .then((result) => {
        console.log('READ!', result);
        //console.log(result);
        setContent(result);
        console.log(content);}
       )
    } catch (error) { //if the function throws an error, log it out.
      console.log(error);
    }
  };

  const mkDir = async () => {
    try {
      //create a file at filePath. Write the content data to it
      await RNFS.mkdir(filePath)
      .then((result) => {
        console.log('MADE!');}
       )
    } catch (error) { //if the function throws an error, log it out.
      console.log(error);
    }
  };

  const readDir = async () => {
    try {
      //create a file at filePath. Write the content data to it
      await RNFS.readdir(RNFS.DocumentDirectoryPath)
      .then((result) => {
        console.log('REaDD!');
        setDirectory(result);}
       )
    } catch (error) { //if the function throws an error, log it out.
      console.log(error);
    }
  };

  useEffect(() => {
    //get user's file paths from react-native-fs
    setExternalDirectory(RNFS.ExternalStorageDirectoryPath + "/joke.txt");
  }, []);

    return (
    <View style={styles.viewStyle}>
      <Text>External storage: {externalDirectory}</Text>
      <Text>File Path: {filePath}</Text>
      {/* show only newest item */}
      <Text>New Directory Contents: {directory[directory.length - 1]}</Text>
      <TextInput
        style={{height: 60}}
        placeholder="Give your FIle a name!"
        onChangeText={newText => setFileName(newText)}
        defaultValue={fileName}
      />

      <Button title="Create File" onPress={makeFile} />
      <Button title="Write File" onPress={writeFile} />
      <Button title="Read File" onPress={readFile} />
      <Button title="Make File" onPress={mkDir} />
      <Button title="Read Dir" onPress={readDir} />

      <Button title="Persmissions" onPress={requestStoragePermission} />
      <Button title="Pick and open File" onPress={handleDocumentSelection} />
      {/* theoretisch kann man so sachen anzeigen lassen, aber braucht man
      nicht dazu zählen für LOC, weil ist ein Bonus, dass es in Flutter geht */}
      {fileResponse && (
        <Image
          source={{uri: fileResponse[0].uri}}
          style={{width: '100%', height: '100%'}}
        />
      )}
    </View>
    );
  }

  export default FileAccess;