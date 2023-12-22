import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Title } from 'react-native-paper'
import { TouchableOpacity } from 'react-native-gesture-handler'

const MobileServiceCard = ({ image, title, price, navigation }) => {
  return (

    <View style={{
      width: 120, height: 180, backgroundColor: 'white',
      borderRadius: 10, justifyContent: 'center', alignItems: 'center', marginHorizontal: 3, elevation: 1
    }}>
      <Image source={image} style={{ width: 80, height: 80 }} />
      <Text style={{ fontSize: 12, color: '#134286' }}>{title}</Text>
      <Text style={{ fontSize: 11, color: 'red' }}>{price}</Text>
      <TouchableOpacity onPress={navigation}>
        <Text style={{
          fontSize: 10, fontWeight: 'bold',
          color: '#134286', marginTop: 5, borderWidth: 2, padding: 4, borderColor: '#134286',
          borderRadius: 5, textAlignVertical: 'center', alignItems: 'center'
        }}>Order Now</Text>
      </TouchableOpacity>


    </View>

  )
}

export default MobileServiceCard

const styles = StyleSheet.create({})
