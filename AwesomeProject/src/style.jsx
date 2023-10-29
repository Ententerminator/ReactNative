import {StyleSheet} from 'react-native';

  const styles = StyleSheet.create({

    colors: {
        foregroundColor: 'rgba(0, 80, 255, 1)',
        backgroundColor: 'rgba(238, 238, 238, 1)',
    },

    viewStyle: {
        backgroundColor: 'rgba(238, 238, 238, 1)',
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

    viewContactRow: {
        flexDirection: 'row', 
        marginVertical: 5, 
        alignItems: 'center',
    },

    viewContactLetter: {
        width: 25, 
        marginHorizontal: 6
    },
    
    viewContactText: {
        flex: 1, 
        flexWrap: 'wrap', //nur needed wegen telephonnummer, wenn alles in einer reihe gehts auch ohne
        flexDirection: 'row'
    },

    textLiveData: {
        fontFamily: 'serif',
        fontSize: 20,
        fontWeight: 'bold',
        paddingTop: 20,
        alignSelf: 'center'
    },

    textStyle: {
        fontFamily: 'serif',
        fontSize: 18,
        textAlign: "center",
        color: 'white'
    },

    textContacts: {
        fontFamily: 'serif',
        fontSize: 15,
        fontWeight: 'bold',
    },

    letterStyle: {
        fontWeight: 'bold',
        fontFamily: 'serif',
        fontSize: 18,
        color: 'white',
        backgroundColor: 'rgba(49, 216, 99, 1)',
        borderRadius: 20,
        textAlign: 'center'
    },

    textInput: {
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

    drawerItemWithIcon: {   // wird gezählt
        left: -30,          // wird gezählt
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

    deleteButton: {
        width: 80,
        height: 30,
        backgroundColor: 'rgba(245, 65, 52, 1)',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center'
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