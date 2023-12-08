import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MainContainer from './navigation/MainContainer'
import LoginScreen from './navigation/LoginScreen'
import VideoPlayer from './navigation/screens/VideoPlayer'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ShopScreen from './navigation/screens/ShopScreen'
import HomeScreen from './navigation/screens/HomeScreen'
import VideoPlayerScreen from './navigation/screens/VideoPlayerScreen'
import Profile from './navigation/Profile'
import ShopInformation from './navigation/screens/ShopInformation'
import OrderScreen from './navigation/screens/OrderScreen'
import ForgotPasswordView from './navigation/screens/ForgotPasswordScreen'
import ServiceCard from './compoment/ServiceCard'
const Navigation = () => {
  const Stack = createNativeStackNavigator();
  <NavigationContainer>
    <Stack.Navigator initialRouteName='VideoPlayer'>
      <Stack.Screen
        name="VideoPlayer"
        component={VideoPlayer}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="ShopScreen" component={ShopScreen} />
      <Stack.Screen name="Home Screen" component={HomeScreen} />
    </Stack.Navigator>
  </NavigationContainer>
}
const App = () => {
  const Stack = createNativeStackNavigator();
  return (
   
    <MainContainer/>
  )
}
export default App
