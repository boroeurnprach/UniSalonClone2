import * as React from 'react';
import { View, Text, TouchableOpacity, Image, ImageBackground, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

// Screens
import HomeScreen from './screens/HomeScreen';
import ShopScreen from './screens/ShopScreen';
import VideoScreen from './screens/VideoScreen';
import Professor from './Professor';
import Promotion from './Promotion';
import LoginScreen from './LoginScreen';
import { FlatList } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { withDecay } from 'react-native-reanimated';
import Profile from './Profile';
import Favorite from './screens/Favourite';
import Setting from './screens/Setting';
import Policy from './screens/Policy';
import Payment from './screens/Payment';
import Membership from './screens/Membership';
import TodayBookingAndOrder from './screens/BookingAndOrder';
import BookingAndOrder from './screens/BookingAndOrder';
import VideoPlayerScreen from './screens/VideoPlayerScreen';

// Screen names
const homeName = "Home";
const shopName = "Shops";
const videoName = "Videos";
const proName = "Professors";
const promoName = "Promotions";

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const Stack = createStackNavigator();

function MainTabs() {
  return (

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
                  color={focused ? 'purple' : 'grey'}
                />
                <Text
                  style={{
                    fontSize: 10,
                    color: focused ? 'purple' : 'grey',
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
                  color={focused ? 'purple' : 'grey'}
                />
                <Text
                  style={{ fontSize: 10, color: focused ? 'purple' : 'grey' }}>
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
                  color={focused ? 'purple' : 'grey'}
                />
                <Text
                  style={{ fontSize: 10, color: focused ? 'purple' : 'grey' }}>
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
                  color={focused ? 'purple' : 'grey'}
                />
                <Text
                  style={{ fontSize: 10, color: focused ? 'purple' : 'grey' }}>
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
                  color={focused ? 'purple' : 'grey'}
                />
                <Text
                  style={{ fontSize: 10, color: focused ? 'purple' : 'grey' }}>
                  Promotions
                </Text>
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props} showsVerticalScrollIndicator={false}>
      <View>
        <View style={{}}>
          <View style={{}}>
            <Image source={require('../assets/lambo_car.jpg')} style={{ height: 200, width: '100%' }} />
          </View>
          <View style={{}}>

            <Image source={require('../assets/boroeurn.jpg')} style={{ height: 70, width: 70, borderRadius: 200, marginTop: -130, marginLeft: 20,}}  />
          </View>
            <Text style={{marginTop: -50, marginBottom: 40, marginLeft: 20, color: 'white'}}>Boroeurn</Text>
        </View>
        <TouchableOpacity onPress={() => props.navigation.navigate("Profile")}>
          <View style={{ padding: 16, flexDirection: 'row', marginRight: 10, }}>
            <Icon name="user-circle-o" size={20} />
            <Text style={{ marginLeft: 15 }}>Profile</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.navigation.navigate("Favorite")}>
          <View style={{ padding: 16, flexDirection: 'row', marginRight: 10 }}>
            <Icon name="heart" size={20} />
            <Text style={{ marginLeft: 15 }}>Favorite</Text>
          </View>
        </TouchableOpacity>
        <View style={{ flex: 1, height: 1, backgroundColor: '#003f5c' }} />

        <TouchableOpacity onPress={() => props.navigation.navigate("Profile")}>
          <View style={{ padding: 16, flexDirection: 'row', marginRight: 10 }}>
            <Entypo name="message" size={20} />
            <Text style={{ marginLeft: 15 }}>Message</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.navigation.navigate("Membership")}>
          <View style={{ padding: 16, flexDirection: 'row', marginRight: 10 }}>
            <MaterialIcons name="stars" size={20} />
            <Text style={{ marginLeft: 15 }}>Memebership</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.navigation.navigate("Profile")}>
          <View style={{ padding: 16, flexDirection: 'row', marginRight: 10 }}>
            <FontAwesome name="calendar-check-o" size={20} color="green" />
            <Text style={{ marginLeft: 15 }}>Today Booking & Order</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.navigation.navigate("BookingAndOrder")}>
          <View style={{ padding: 16, flexDirection: 'row', marginRight: 10 }}>
            <Entypo name="calendar" size={20} />
            <Text style={{ marginLeft: 15 }}>Booking & Order</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.navigation.navigate("BookingAndOrder")}>
          <View style={{ padding: 16, flexDirection: 'row', marginRight: 10 }}>
            <FontAwesome5 name="history" size={20} />
            <Text style={{ marginLeft: 15 }}>History Booking & Order</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.navigation.navigate("Payment")}>
          <View style={{ padding: 16, flexDirection: 'row', marginRight: 10 }}>
            <Entypo name="credit-card" size={20} color="purple" />
            <Text style={{ marginLeft: 15 }}>Payment</Text>
          </View>
        </TouchableOpacity>
        <View style={{ flex: 1, height: 1, backgroundColor: '#003f5c' }} />
        <TouchableOpacity onPress={() => props.navigation.navigate("Setting")}>
          <View style={{ padding: 16, flexDirection: 'row', marginRight: 10 }}>
            <Feather name="settings" size={20} />
            <Text style={{ marginLeft: 15 }}>Settings</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.navigation.navigate("Policy")}>
          <View style={{ padding: 16, flexDirection: 'row', marginRight: 10 }}>
            <Entypo name="shield" size={20} />
            <Text style={{ marginLeft: 15 }}>Privacy Policy</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.navigation.navigate("Profile")}>
          <View style={{ padding: 16, flexDirection: 'row', marginRight: 10 }}>
            <AntDesign name="questioncircle" size={20} />
            <Text style={{ marginLeft: 15 }}>Help & Feedback</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.navigation.navigate("LoginScreen")}>
          <View style={{ padding: 16, flexDirection: 'row', marginRight: 10 }}>
            <Entypo name="log-out" size={20} />
            <Text style={{ marginLeft: 15 }}>Sign Out</Text>
          </View>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>

  );
}

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="VideoPlayerScreen" component={VideoPlayerScreen} />
      
    </Stack.Navigator>
  );
}
function MainContainer() {
  const navigationRef = React.useRef();

  return (
    <NavigationContainer ref={navigationRef}>
      <Drawer.Navigator
        drawerContent={props => <CustomDrawerContent {...props} />}
        screenOptions={{
          swipeEnabled: false,
          headerShown: false
        }}


      >
        <Drawer.Screen name="MainTabs" component={MainTabs} />
        <Drawer.Screen name="Login" component={LoginScreen} />
        <Drawer.Screen name="Profile" component={Profile} />
        <Drawer.Screen name="Favorite" component={Favorite} />
        <Drawer.Screen name="Setting" component={Setting} />
        <Drawer.Screen name="MyStack" component={MyStack} />
        <Drawer.Screen name="Policy" component={Policy} />
        <Drawer.Screen name="Payment" component={Payment} />
        <Drawer.Screen name="Membership" component={Membership} />
        <Drawer.Screen name="BookingAndOrder" component={BookingAndOrder} />
        <Drawer.Screen name="LoginScreen" component={LoginScreen} />
        <Drawer.Screen name="VideoPlayerScreen" component={VideoPlayerScreen} />
      </Drawer.Navigator>
     
    </NavigationContainer>
  );
}

function UserProfileScreen() {
  // Replace this with your user profile screen implementation
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>User Profile Screen</Text>
    </View>
  );
}

export default MainContainer;

// var styles = StyleSheet.create({
//   backgroundContainer: {
//     position: 'absolute',
//     top: 0,
//     bottom: 0,
//     left: 0,
//     right: 0,
//   },
//   container: {
//     flex: 1,
//     alignItems: 'center',
//   },
//   overlay: {
//     opacity: 1,
//   },
//   logo: {
//     width: 160,
//     height: 52,
//     borderRadius: 100,
//   },
//   backdrop: {
//     flex: 1,
//     flexDirection: 'column'
//   },
//   headline: {
//     fontSize: 18,
//     textAlign: 'center',
//     backgroundColor: 'black',
//     color: 'white'
//   }
// });
