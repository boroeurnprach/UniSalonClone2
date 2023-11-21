// CustomCard.js

import React from 'react';
import { View, Text, Image } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import { useFonts } from 'expo-font';


const Card = ({ imageSource, location, customerCount, userName }) => {
  const [fontsLoaded] = useFonts({
    'KantumruyPro': require('./assets/fonts/KantumruyPro-VariableFont_wght.ttf'),
    'Suwannaphum-Regular': require('./assets/fonts/Suwannaphum-Regular.ttf'),
  });
  return (
    <View style={{ backgroundColor: 'white', height: 160, width: 160, borderRadius: 2, margin: 10, elevation: 3, }}>
      <Image style={{ width: '100%', height: '40%', borderRadius: 2 }} source={imageSource} />
      <View style={{ margin: 10 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Entypo name="location-pin" size={13} color='blue' />
            <Text style={{ fontSize: 10 }}>{location}</Text>
          </View>
          <Text style={{ fontSize: 9, color: 'grey', marginRight: 3, }}>{customerCount} Customers</Text>
        </View>
        <Text style={{}}>{userName}</Text>
        <View style={{ borderColor: '#144389', borderWidth: 1, justifyContent: 'center', alignSelf: 'center', padding: 3, borderRadius: 4, marginTop: 10 }}>
          <View style={{ flexDirection: 'row' }}><Text style={{ color: '#144389' }}>Booking Now</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Card;
