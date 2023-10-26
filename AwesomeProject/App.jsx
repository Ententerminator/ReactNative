import 'react-native-gesture-handler';
import React from 'react';
import {CurrentRenderContext, NavigationContainer} from '@react-navigation/native';
import { DrawerToggleButton, createDrawerNavigator } from '@react-navigation/drawer';
import { Linking, Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import HomeScreen from './src/HomeScreen';
import Accelerometer from './src/Accelerometer';
import Camera from './src/Camera';
import Contacts from './src/Contacts';
import FileAccess from './src/FileAccess';
import GpsData from './src/GpsData';
import RetrieveData from './src/RetrieveData';
import styles from './src/style';
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
  TouchableOpacity,
  ActivityIndicator,
  AppState
} from 'react-native';
import Snackbar from "react-native-snackbar";
import EntypoIcon from "react-native-vector-icons/Entypo";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import MaterialIconsIcon from "react-native-vector-icons/MaterialIcons"


const PERSISTENCE_KEY = 'NAVIGATION_STATE_V1';


const Drawer = createDrawerNavigator();

const YourApp = () => {

  const [isReady, setIsReady] = React.useState(false);
  const [initialState, setInitialState] = React.useState();

  React.useEffect(() => {
    const restoreState = async () => {
      try {
        const initialUrl = await Linking.getInitialURL();

        if (Platform.OS !== 'web' && initialUrl == null) {
          // Only restore state if there's no deep link and we're not on web
          const savedStateString = await AsyncStorage.getItem(PERSISTENCE_KEY);
          const state = savedStateString ? JSON.parse(savedStateString) : undefined;

          if (state !== undefined) {
            setInitialState(state);
          }
        }
      } finally {
        setIsReady(true);
      }
    };

    if (!isReady) {
      restoreState();
    }

    const handleChange = AppState.addEventListener("focus", () => { 
      Snackbar.show({
        text: 'Welcome Back',
        duration: Snackbar.LENGTH_SHORT,
        //fontFamily: 'serif', //muss eingefügt werden in ./assets/fonts und geht nur in android?
        backgroundColor: 'rgba(0, 80, 255, 1)',
      });
    }); 

    return () => { 
      handleChange.remove(); 
    };

  }, [isReady]);

  if (!isReady) {
    return <ActivityIndicator />;
  }





  return (
    <NavigationContainer
    initialState={initialState}
    onStateChange={(state) => AsyncStorage.setItem(PERSISTENCE_KEY, JSON.stringify(state))}>
      <Drawer.Navigator 
        initialRouteName="Homepage"
        backBehavior='history'
        screenOptions={{
          headerStyle: {
            backgroundColor: styles.colors.foregroundColor,
          },
          headerTintColor: styles.textStyle.color,
          headerTitleStyle: {
            fontFamily: styles.textStyle.fontFamily,
          },

          headerTitleAlign: 'center',

          //headerShown: true, - standardmäßig auf true
          //drawer stuff
          drawerPosition: 'right',
          drawerActiveTintColor: styles.colors.foregroundColor,
          swipeEnabled: false,
          drawerActiveBackgroundColor: null, //keine highlight farbe beim ausgewählten
          drawerLabelStyle: styles.drawerText,

          drawerStyle: {
            backgroundColor: styles.colors.backgroundColor
          },

          headerLeft: () => <Button title="Go back"/>,
          headerRight: () => <DrawerToggleButton tintColor='white' />,
      }}>
        <Drawer.Screen
          name="Homepage"
          component={HomeScreen}
          options={{
            drawerLabel: 'MyHomepage',
            drawerItemStyle: styles.drawerItemWithIcon,
            drawerIcon: ({focused, size}) => (
              <EntypoIcon
                 name="home" 
                 size = {size} 
                 color={focused ? styles.colors.foregroundColor : null}
                 style={styles.drawerIcon}
              />
            ),
            headerLeft: false
          }}
        />
        <Drawer.Screen name="Accelerometer" 
          component={Accelerometer} 
          options={{
            drawerLabel: 'Accelerometer',
        }}
          />
        <Drawer.Screen name="Camera" 
          component={Camera} 
          options={{
            drawerLabel: 'Camera',
            drawerItemStyle: styles.drawerItemWithIcon,
            drawerIcon: ({focused, size}) => (
              <FontAwesomeIcon
                 name="camera" 
                 size = {size} 
                 color={focused ? styles.colors.foregroundColor : null}
                 style={styles.drawerIcon}
              />
            ),
          }}
        />
        <Drawer.Screen name="Contacts" 
        component={Contacts} 
          options={{
            drawerLabel: 'Contacts',
            drawerItemStyle: styles.drawerItemWithIcon,
            drawerIcon: ({focused, size}) => (
              <MaterialIconsIcon
                 name="group" 
                 size = {size} 
                 color={focused ? styles.colors.foregroundColor : null}
                 style={styles.drawerIcon}
              />
            ),
          }}
        />
        <Drawer.Screen name="FileAccess" 
        component={FileAccess} 
          options={{
            drawerLabel: 'FileAccess',
            drawerItemStyle: styles.drawerItemWithIcon,
            drawerIcon: ({focused, size}) => (
              <FontAwesomeIcon
                 name="folder" 
                 size = {size} 
                 color={focused ? styles.colors.foregroundColor : null}
                 style={styles.drawerIcon}
              />
            ),
          }}
        />
        <Drawer.Screen name="GpsData" 
        component={GpsData} 
          options={{
            drawerLabel: 'GpsData',
            drawerItemStyle: styles.drawerItemWithIcon,
            drawerIcon: ({focused, size}) => (
              <MaterialIconsIcon
                 name="gps-fixed" 
                 size = {size} 
                 color={focused ? styles.colors.foregroundColor : null}
                 style={styles.drawerIcon}
              />
            ),
          }}
        />
        <Drawer.Screen name="RetrieveData" 
        component={RetrieveData} 
          options={{
            drawerLabel: 'RetrieveData'}}
        />
        
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default YourApp;