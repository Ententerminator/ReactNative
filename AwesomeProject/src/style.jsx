import {
    StyleSheet,
    Button,
    View,
    SafeAreaView,
    Text,
    Alert,
    Image,
  } from 'react-native';

  const styles = StyleSheet.create({

    colors: {
        foregroundColor: 'rgba(0, 80, 255, 1)',
        backgroundColor: 'rgba(238, 238, 238, 1)',
    },

    viewStyle: {
        backgroundColor: 'rgba(238, 238, 238, 1)', //238 238 238
        height: '100%',
    },

    viewRow: {
        paddingTop: 30,
        flexDirection: 'row', 
        justifyContent: 'space-evenly'
    },

    viewLiveRow: {
        flexDirection:'row', 
        justifyContent:'center'
    },

    viewLiveColumn: {
        paddingTop: 80,
        flexDirection: 'column', 
    },

    textLiveData: {
        fontFamily: 'serif',
        fontSize: 20,
        fontWeight: 'bold',
        paddingTop: 20,
        alignSelf: 'center'
    },

    textStyle: {
        fontFamily: 'serif',    //TODO times new roman, oder in flutter auf serif ändern - einfach serifen schrift als angabe?
        fontSize: 18,
        textAlign: "center",
        color: 'white'
    },

    drawerText: {
        fontFamily: 'serif',
        fontSize: 15,
    },

    drawerItemWithIcon: {
        left: -30,
    },

    drawerIcon: {
        position: "absolute",
        right: 0,
    },

    button: {
        backgroundColor: 'rgba(0, 80, 255, 1)',
        justifyContent: 'center',
        borderRadius: 5
    },

    homepageButton: {
        height: 90,
        width: 160,
    },

    customButton: {
        height: 90,
        width: 160,
    },


    });

    export default styles;