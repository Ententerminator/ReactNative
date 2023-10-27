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

    textInput: {    //TODO ausmisten? bordercolor etc
        height: 60, 
        width: 250, 
        borderWidth: 1,
        borderColor: 'black', 
        alignSelf: 'center', 
        fontSize: 18, 
        marginTop: 20, 
        fontFamily: 'serif', 
        paddingLeft: 10
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
        borderRadius: 5,
        width: 250,
        height: 60,
        marginTop: 20,
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center'
    },

    homepageButton: {
        height: 90,
        width: 160,
    },

    customButton: {
        height: 90,
        width: 160,
    },

    retrieveDataImage: {
        width: 400, 
        height: 500, 
    resizeMode: 'contain', //TODO braucht man
        alignSelf: 'center'
    },

    cameraText: {
        height:30,
        fontSize: 20,
        fontWeight: 'bold'
    },

    cameraButtonPosition: {
        position: 'absolute',
        bottom: 40,
        alignSelf: 'center',
        right: 50
    },

    cameraPreviewImagePosition: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        alignSelf: 'start'
    },

    cameraPreviewImage: {
        width: 100, 
        height: 100, 
        resizeMode: 'contain', 
        borderRadius:40
    },


    });

    export default styles;