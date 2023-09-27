import React from 'react';
import {
    StyleSheet,
    Button,
    View,
    SafeAreaView,
    Text,
    Alert,
  } from 'react-native';

const BackButton = (navigation) => {
    React.useEffect(() => {
        // Use `setOptions` to update the button that we previously specified
        // Now the button includes an `onPress` handler to update the count
        navigation.setOptions({
          headerLeft: () => (
            <Button onPress={() => navigation.navigate('Home')} title="Back Up Fam" />
          ),
        });
      }, [navigation]);
}

export default BackButton;