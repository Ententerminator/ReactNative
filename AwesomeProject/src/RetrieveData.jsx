import React, {useEffect, useState} from 'react';
import BackButton from './BackButton'; 
import styles from './style';
import { View, RefreshControl, ActivityIndicator, ScrollView, Image} from 'react-native';

const RetrieveData = ({navigation}) => {
  BackButton(navigation);

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [refreshing, setRefreshing] = React.useState(false);

  const getDog = async () => {
    try {
      setRefreshing(true);
      const response = await fetch('https://dog.ceo/api/breeds/image/random');
      const json = await response.json();
      setData(json.message);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    getDog();
  }, []);

  return (
    <View style={[styles.viewStyle]}>
      <ScrollView
        refreshControl={
          <RefreshControl 
            colors={[styles.colors.foregroundColor]}
            refreshing={refreshing} 
            onRefresh={getDog}
          /> 
        }>
        {isLoading ? (
          <ActivityIndicator/>
        ) : ( //nicht mitzählen
          <View>
            <Image 
              source={{uri: data}} 
              style={styles.retrieveDataImage}
            />
          </View>
        )}
      </ScrollView>
    </View>
  );
};

  export default RetrieveData;