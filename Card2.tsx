import React from 'react';
import { View, Text, Image } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const Card2 = ({ shopName, location, status, description, rate, imageSource }) => {
  return (
    <View style={{ height: 130, width: '100%', backgroundColor: 'white', borderRadius: 5, flexDirection: 'row', marginVertical: 5, elevation: 2 }}>
      <Image style={{ width: '50%', height: '100%', borderRadius: 2 }} source={imageSource} />
      <View style={{ flex: 1, marginLeft: 5, justifyContent: 'space-between' }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginRight: 15, marginTop: 5}}><Text style={{ fontSize: 13, flex: 1 }}>{shopName}</Text>
          <View style={{ borderWidth: 1, borderColor: '#144389', borderRadius: 4, paddingVertical: 5, paddingHorizontal: 10 }}>
            <Text style={{ color: '#144389', textAlign: 'center', }}>Booking</Text>
          </View>
        </View>
        <Text style={{ fontSize: 10 }}>{rate}</Text>
        <Text style={{ fontSize: 10, }}>{description}</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 5 }}>
            <Entypo name="location-pin" size={13} color='#144389' />
            <Text style={{ fontSize: 10, color: '#144389' }}>{location}</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 5, padding: 4 }}>
            <MaterialIcon name="clock-time-four-outline" size={13} color='#144389' />
            <Text style={{ fontSize: 10, color: '#144389' }}>{status}</Text>
          </View>
        </View>
      </View>
    </View>

  );
}

export default Card2;
