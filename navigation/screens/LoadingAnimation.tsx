import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Grid } from 'react-native-animated-spinkit';

const LoadingAnimation = () => {
  const navigation = useNavigation();
  useEffect(() => {
    console.log('Start push screen');
    setTimeout(() => {
      console.log('Screen Pushed');
      navigation.reset({
        index: 0,
        routes: [{ name: 'MainTabs' }],
      });
    }, 500);
  });
  return (
    <View style={styles.container}>
      <Grid color="white" size={40} />
      <View style={{ height: 30 }}></View>
      <Text style={styles.txtStyle}>Loading...</Text>
    </View>
  );
};

export default LoadingAnimation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#134286',
  },
  txtStyle: {
    fontSize: 14,
    color: 'white',
    fontWeight: 'bold',
  },
});