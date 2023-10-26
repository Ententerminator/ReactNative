import React, {useState, useEffect} from 'react';
import BackButton from './BackButton'; 
import Contacts, { deleteContact } from 'react-native-contacts';
import CustomButton from './CustomButton';
import styles from './style';
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
  PermissionsAndroid,
  FlatList,
} from 'react-native';


//braucht man doch!
PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
  title: 'Contacts',
  message: 'This app would like to view your contacts.',
  buttonPositive: 'Please accept bare mortal',
})
  .then((res) => {
      console.log('Permission: ', res);
      Contacts.getAll()
          .then((contacts) => {
              // work with contacts
              console.log(contacts);
          })
          .catch((e) => {
              console.log(e);
          });
  })
  .catch((error) => {
      console.error('Permission error: ', error);
  });

  PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.WRITE_CONTACTS, {
    title: 'Contacts',
    message: 'This app would like to write your contacts.',
    buttonPositive: 'Please accept bare mortal',
  })
    .then((res) => {
        console.log('Permission: ', res);
        Contacts.getAll()
            .then((contacts) => {
                // work with contacts
                //console.log(contacts);
            })
            .catch((e) => {
                console.log(e);
            });
    })
    .catch((error) => {
        console.error('Permission error: ', error);
    });



const ContactsPage = ({navigation}) => {
  BackButton(navigation)

  const [contacts, setContacts] = useState([]);
  newContact = {familyName:''};
  
  useEffect(() => {
    refreshContacts();
  }, []);

  const keyExtractor = (item, idx) => {
    return item?.recordID?.toString() || idx.toString();
  };

  const renderItem = ({item, index}) => {
    return (
      <View style={{flexDirection: 'row'}}>
        <Text>{item.givenName[0]} </Text>
        <Text>{item.givenName}  {item.familyName}</Text>
        <Text> {item.phoneNumbers[0]?.number} </Text>        
        <Button title="Delete" onPress= {() => {
          Contacts.deleteContact(item)
          refreshContacts() 
          }}/>
      </View>
    );
  };

  const insertContact = async () => {
    await Contacts.openContactForm(newContact);
    refreshContacts();
  };

  const refreshContacts = () => {
    Contacts.getAll().then(contacts => {
      setContacts(contacts);
    });
  }

    return (
    <View style={styles.viewStyle}>
      <Text > Contacts </Text>
      <Button title="Make Contact" onPress={insertContact} />
      <FlatList
      data={contacts}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
    />
    </View>
    );
  }

  export default ContactsPage;