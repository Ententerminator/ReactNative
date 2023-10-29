import React, {useState, useEffect} from 'react';
import BackButton from './BackButton'; 
import Contacts, { deleteContact } from 'react-native-contacts';
import CustomButton from './CustomButton';
import styles from './style';
import { View, Text, PermissionsAndroid, FlatList } from 'react-native';
import MaterialIconsIcon from "react-native-vector-icons/MaterialIcons"



//braucht man doch!
PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
  title: 'Contacts',
  message: 'This app would like to view your contacts.',
  buttonPositive: 'Please accept bare mortal',
}).then((res) => {
    console.log('Permission Read Contact: ', res); //nicht zählen
    Contacts.getAll()
      .catch((e) => {
          console.log(e);
      });
  }).catch((error) => {
      console.error('Permission error: ', error);
  }
);

  PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.WRITE_CONTACTS, {
    title: 'Contacts',
    message: 'This app would like to write your contacts.',
    buttonPositive: 'Please accept bare mortal',
  }).then((res) => {
      console.log('Permission Write Contact: ', res); //nicht zählen
      Contacts.getAll()
        .catch((e) => {
            console.log(e);
        });
    }).catch((error) => {
        console.error('Permission error: ', error);
    });



const ContactsPage = ({navigation}) => {
  BackButton(navigation);

  const [contacts, setContacts] = useState([]);
  newContact = {familyName:''};
  
  useEffect(() => {
    refreshContacts();
  }, []);   //wird nicht gezählt

  const keyExtractor = (item, idx) => {
    return item?.recordID?.toString() || idx.toString();
  };

  const renderItem = ({item, index}) => {
    var colors = ['#9999FF', '#6B7DB3', '#BB99FF', '#6BB3B3'];
    var color = colors[Math.floor(Math.random() * colors.length)];

    return (
      <View style={styles.viewContactRow}>
        <View style={styles.viewContactLetter}>
          <Text style={[styles.letterStyle, {backgroundColor: color}]}>{item.givenName[0].toUpperCase()}</Text>          
        </View>
        <View style={styles.viewContactText}>
          <Text style={styles.textContacts}>{item.givenName} {item.familyName}</Text>
          <Text style={styles.textContacts}> {item.phoneNumbers[0]?.number}</Text> 
        </View>     
        <View style={{width: 100}}>
          <CustomButton 
            icon={
              <MaterialIconsIcon
                name="delete" 
                color="white"
                size = {18} 
              />
            }
            title="Delete" 
            onPress= {() => {
              Contacts.deleteContact(item);
              refreshContacts();
            }}
            buttonStyle={styles.deleteButton}
            textStyle={[styles.textStyle,{fontSize: 15}]}
          />
        </View>
      </View>
    );
  };

  const insertContact = async () => {
    await Contacts.openContactForm(newContact);
    refreshContacts();
  };

  const refreshContacts = () => {
    Contacts.getAll()
    .then(contacts => {
      setContacts(contacts);
    });
  }

    return (
    <View style={styles.viewStyle}>
      <CustomButton 
        title="New Contact" 
        onPress={insertContact} 
        buttonStyle={styles.button}
        textStyle={styles.textStyle}
      />
      <FlatList 
        style={{marginTop: 20}}
        data={contacts}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
    />
    </View>
    );
  }

  export default ContactsPage;