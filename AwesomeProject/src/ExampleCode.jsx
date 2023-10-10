import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { HeaderBackButton } from 'react-navigation/stack';


const Stack = createNativeStackNavigator();

const ProfileScreen = ({navigation, route}) => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{color: 'black'}}>This is {route.params.name}'s profile</Text>
        <Button
          title="Go to Profile... again"
          onPress={() => navigation.push('Profile')}
        />
        <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
        <Button title="Go back" onPress={() => navigation.goBack()} />
        <Button
          title="Go back to first screen in stack"
          onPress={() => navigation.popToTop()}
        />
      </View>
    );
  }
  
  const YourApp = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home"
        screenOptions={{
          title: 'Example App ReactNative',
          headerStyle: {
            backgroundColor: 'blue',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerLeft: () => HeaderBackButton,
          headerRight: () => (
          <Button
            onPress={() => alert('This is a button!')}
            title="Info"
            color="#fff"
          />
        ),
        }}>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              title: 'Home'}}
          />
          <Stack.Screen name="Accelerometer" component={Accelerometer} />
          <Stack.Screen name="Camera" component={Camera} />
          <Stack.Screen name="Contacts" component={Contacts} />
          <Stack.Screen name="FileAccess" component={FileAccess} />
          <Stack.Screen name="GpsData" component={GpsData} />
          <Stack.Screen name="RetrieveData" component={RetrieveData} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

  const MyApp = (navigation) => {
    return (
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home"
        backBehavior='history'
        screenOptions={{
          title: 'Example App ReactNative',
          headerStyle: {
            backgroundColor: 'blue',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          drawerPosition: 'right',
          swipeEnabled: false,
          headerLeft: () => <Button
          title = 'Hi'
          icon={{
                  name: 'arrow-right',
                }}
          onPress={() => alert('This is a button!')}
          />,
          headerRight: () => <DrawerToggleButton tintColor='white' />,
        }}>
          <Drawer.Screen
            name="Home"
            component={HomeScreen}
            options={{
              drawerLabel: 'Home',
              headerLeft: false}}
          />
          <Drawer.Screen name="Accelerometer" 
            component={Accelerometer} 
            options={{
              drawerLabel: 'Accelerometer'}}
            />
          <Drawer.Screen name="Camera" 
            component={Camera} 
            options={{
              drawerLabel: 'Camera'}}
          />
          <Drawer.Screen name="Contacts" 
          component={Contacts} 
            options={{
              drawerLabel: 'Contacts'}}
          />
          <Drawer.Screen name="FileAccess" 
          component={FileAccess} 
            options={{
              drawerLabel: 'FileAccess'}}
          />
          <Drawer.Screen name="GpsData" 
          component={GpsData} 
            options={{
              drawerLabel: 'GpsData'}}
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


{  values = ["x", "y", "z"]

const initialValue = values.reduce((carry, val) => ({ ...carry, [val]: 0 }), {}); //hacky lösung, damit initial values auf nullg gesetzt werden

carry = {}

val = "x";

(carry, val) => (
    { 
        ...carry, 
        [val]: 0 
    }
)

() //- mein rückgabewerte



const variablestring = "linda rung";

const object = {
    age: 42,
    "age": 42,
    "linda rung": "irgendwas anderes"
}
object[variablestring] }
useState[setSensorValues] // useState gibt ein array zurück und wir wollen 2 explizite wert: getter und setter (sensorValues und setSensorValues)

const carry1 = {
  x: 0
}

const carry2 = {
  x: 0,
  y: 0
}

const carry3 = {
  x: 0,
  y: 0,
  z: 0
}


//PERMISSIONS

const requestLocationPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'Geolocation Permission',
        message:
          'May we inquire the whereabouts of thine castle?',
        buttonNeutral: 'Too soon',
        buttonNegative: 'No way?',
        buttonPositive: 'Sure Thang',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('Thou can use mine location');
    } else {
      console.log('NaBro');
    }
  } catch (err) {
    console.warn(err);
  }
};

//brauchts maybe gar nicht, permissions reinschreiben reicht?
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