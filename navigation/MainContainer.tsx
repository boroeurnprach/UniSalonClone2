import * as React from 'react';
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';



// Screens
import HomeScreen from './screens/HomeScreen';
import Shop from './screens/ShopScreen';
import Video from './screens/VideoScreen';
import Professor from './Professor';
import Promotion from './Promotion';
import ShopScreen from './screens/ShopScreen';
import VideoScreen from './screens/VideoScreen';

//Screen names
const homeName = "Home";
const shopName = "Shops";
const videoName = "Videos";
const proName = "Professors";
const promoName = "Promotions";



const Tab = createBottomTabNavigator();

function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarHideOnKeyboard: true,
          tabBarShowLabel: false,
          headerShown: false,
          tabBarStyle: {
            position: 'absolute',
            bottom: 0,
            right: 0,
            left: 0,
            elevation: 0,
            height: 60,
            backgroundColor: '#fff',
          },
        }}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                  <Entypo
                    name="location"
                    size={20}
                    color={focused ? '#16247d' : 'grey'}
                  />
                  <Text
                    style={{
                      fontSize: 10,
                      color: focused ? '#16247d' : 'grey',
                      marginRight: 0,
                    }}>
                    Home
                  </Text>
                </View>
              );
            },
          }}
        />
        <Tab.Screen
          name="Shops"
          component={ShopScreen}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                  <Entypo
                    name="shop"
                    size={20}
                    color={focused ? '#16247d' : 'grey'}
                  />
                  <Text
                    style={{ fontSize: 10, color: focused ? '#16247d' : 'grey' }}>
                    Shops
                  </Text>
                </View>
              );
            },
          }}
        />
        <Tab.Screen
          name="Videos"
          component={VideoScreen}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                  <FontAwesome
                    name="video-camera"
                    size={20}
                    color={focused ? '#16247d' : 'grey'}
                  />
                  <Text
                    style={{ fontSize: 10, color: focused ? '#16247d' : 'grey' }}>
                    Videos
                  </Text>
                </View>
              );
            },
          }}
        />
        <Tab.Screen
          name="Professors"
          component={Professor}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                  <Ionicons
                    name="person"
                    size={20}
                    color={focused ? '#16247d' : 'grey'}
                  />
                  <Text
                    style={{ fontSize: 10, color: focused ? '#16247d' : 'grey' }}>
                    Professor
                  </Text>
                </View>
              );
            },
          }}
        />
        <Tab.Screen
          name="Promotion"
          component={Promotion}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Ionicons
                    name="gift"
                    size={20}
                    color={focused ? '#16247d' : 'grey'}
                  />
                  <Text
                    style={{ fontSize: 10, color: focused ? '#16247d' : 'grey' }}>
                    Promotions
                  </Text>
                </View>
              );
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MainContainer;
