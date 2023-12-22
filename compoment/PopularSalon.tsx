import { StyleSheet, Text, View, Image, TouchableOpacity, Pressable } from 'react-native'
import React from 'react'
import Entypo from 'react-native-vector-icons/Entypo'

const PopularSalon = ({ image, nameShop, description, location, userCount, rate, navigation }) => {
  return (

    <View style={{ backgroundColor: 'white', height: 200, width: 180, borderRadius: 2, marginHorizontal: 3, elevation: 3, }}>
      <Image style={{ width: '100%', height: '20%', borderRadius: 2 }} source={image} />
      <View style={{ margin: 10 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Entypo name="location-pin" size={13} color='blue' />
            <Text style={{ fontSize: 10 }}>{location}</Text>
          </View>
          <Text style={{ fontSize: 9, color: 'grey', marginRight: 3, }}>{userCount} Customers</Text>
        </View>
        <Text style={{}}>{nameShop}</Text>
        <Text style={{ fontSize: 10 }}>{rate}</Text>
        <Text style={{ fontSize: 10 }}>{description}</Text>

        <View style={{ borderColor: '#134286', width: 160, height: 30, borderWidth: 1, alignSelf: 'center', padding: 3, borderRadius: 4, marginTop: 10 }}>
          <Pressable onPress={navigation}>
            <View style={{ flexDirection: 'row', alignSelf: 'center', }}><Text style={{ color: '#134286', fontWeight: 'bold' }}>Booking Now</Text>
            </View>
          </Pressable>
        </View>

      </View>
    </View>
  )
}

export default PopularSalon

const styles = StyleSheet.create({})