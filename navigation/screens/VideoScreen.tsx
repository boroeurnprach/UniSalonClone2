import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  ScrollView,
  Dimensions,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Feather from 'react-native-vector-icons/Feather';
import { createStackNavigator } from '@react-navigation/stack';
import VideoPlayerScreen from './VideoPlayerScreen';
import Card3 from '../../Card3';

const Stack = createStackNavigator();
const fontTitle = 14;
const VideoScreen = ({ navigation }) => {
  return (
    <View>
     <View
        style={{
          width: '100%',
          height: 60,
          backgroundColor: '#16247d',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Feather
          onPress={() => {
            navigation.openDrawer();
          }}
          name="menu"
          size={20}
          style={{
            color: 'white',
            position: 'absolute',
            left: 10,
            justifyContent: 'center',
            alignItems: 'center',           
          
          }}
        />
        <Text
          style={{
            fontWeight: 'bold',
    fontSize: fontTitle,
    color: 'white',
    textAlign: 'center',
    
          }}>
          Videos
        </Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              margin: 12,
              backgroundColor: 'white',
              height: 50,
              borderRadius: 5,
            }}>
            <Feather name="search" size={25} color="grey" />
            <TextInput placeholder="Search Videos..." />
          </View>
        </View>
        <View style={{ flexDirection: 'row', marginTop: 10, justifyContent: 'center' }}>
          <View style={{ flex: 1, height: 1, backgroundColor: 'grey' }} />
        </View>
        <View style={{marginVertical: 2}}>
          {/* Updated onPress prop */}
          <Card3
            image={require('../../assets/barber1.jpeg')}
            description="ទំនុកចិត្ដជាមួយយើងខ្ញុំ"
            date="17 Dec 2021 at 11:59 AM"
            onPress={() => navigation.navigate('VideoPlayerScreen')}
          />
        </View>
        <View style={{marginVertical: 2}}>
          {/* Updated onPress prop */}
          <Card3
            image={require('../../assets/salon6.jpeg')}
            description="ទំនុកចិត្ដជាមួយយើងខ្ញុំ"
            date="17 Dec 2021 at 11:59 AM"
            onPress={() => navigation.navigate('VideoPlayerScreen')}
          />
        </View>
        <View style={{marginVertical: 2}}>
          {/* Updated onPress prop */}
          <Card3
            image={require('../../assets/salon2.jpeg')}
            description="ការកក់សក់ឲ្យអតិថិជន"
            date="17 Dec 2021 at 11:59 AM"
            onPress={() => navigation.navigate('VideoPlayerScreen')}
          />
        </View>
        <View style={{marginVertical: 2}}>
          {/* Updated onPress prop */}
          <Card3
            image={require('../../assets/salon2.jpeg')}
            description="ការកក់សក់ឲ្យអតិថិជន"
            date="17 Dec 2021 at 11:59 AM"
            onPress={() => navigation.navigate('VideoPlayerScreen')}
          />
        </View>
        <View style={{marginVertical: 2}}>
          {/* Updated onPress prop */}
          <Card3
            image={require('../../assets/salon3.jpeg')}
            description="ការកក់សក់ឲ្យអតិថិជន"
            date="17 Dec 2021 at 11:59 AM"
            onPress={() => navigation.navigate('VideoPlayerScreen')}
          />
        </View>
        <View style={{marginVertical: 2}}>
          {/* Updated onPress prop */}
          <Card3
            image={require('../../assets/salon5.jpeg')}
            description="ការកក់សក់ឲ្យអតិថិជន"
            date="17 Dec 2021 at 11:59 AM"
            onPress={() => navigation.navigate('VideoPlayerScreen')}
          />
        </View>
        <View style={{marginVertical: 2}}>
          {/* Updated onPress prop */}
          <Card3
            image={require('../../assets/salon4.jpeg')}
            description="ការកក់សក់ឲ្យអតិថិជន"
            date="17 Dec 2021 at 11:59 AM"
            onPress={() => navigation.navigate('VideoPlayerScreen')}
          />
        </View>
        <View style={{marginVertical: 2}}>
          {/* Updated onPress prop */}
          <Card3
            image={require('../../assets/salon4.jpeg')}
            description="ការកក់សក់ឲ្យអតិថិជន"
            date="17 Dec 2021 at 11:59 AM"
            onPress={() => navigation.navigate('VideoPlayerScreen')}
          />
        </View>
        <View style={{marginVertical: 2}}>
          {/* Updated onPress prop */}
          <Card3
            image={require('../../assets/salon4.jpeg')}
            description="ការកក់សក់ឲ្យអតិថិជន"
            date="17 Dec 2021 at 11:59 AM"
            onPress={() => navigation.navigate('VideoPlayerScreen')}
          />
        </View>
        <View style={{marginVertical: 2}}>
          {/* Updated onPress prop */}
          <Card3
            image={require('../../assets/salon4.jpeg')}
            description="ការកក់សក់ឲ្យអតិថិជន"
            date="17 Dec 2021 at 11:59 AM"
            onPress={() => navigation.navigate('VideoPlayerScreen')}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default VideoScreen;


const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        backgroundColor: '#144389',
        height: 60,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'space-between',
        // marginRight: '50%',
        // justifyContent: 'center',


    },
    textShop: {
        color: 'white',
        paddingLeft: '35%',
        fontWeight: 'bold'
    },
    icon: {
        marginLeft: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },

})