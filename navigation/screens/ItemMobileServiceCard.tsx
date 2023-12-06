import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const ItemMobileServiceCard = ({image, cash, amount, title}) => {
  return (
    <View>
      <View style={{width: 100, height: 150, backgroundColor: '#ffffff', borderRadius: 5, margin: 10, elevation: 2 }}>
      <View style={{width: 70, height: 40,
       backgroundColor: '#87ceeb',
       borderBottomRightRadius:5,
       borderTopLeftRadius: 5,
       marginBottom: 5,
        }}>
          <Text style={{color: 'white', fontSize: 12}}>{cash}</Text>
          <Text style={{color: 'white', fontSize: 12}}>Up</Text>

      </View>
      <View style={{width: 30, height: 20,
       backgroundColor: '#87ceeb',
       borderBottomRightRadius:5,
       borderTopLeftRadius: 5,
        }}>
          <Text style={{color: 'white', fontSize: 12}}>{amount}</Text>
      </View>
      <View style={{alignSelf: 'center', marginTop: 30}}>
        <Image source={image} style={{width: 50, height: 50}}/>
      </View>
    <Text style={{color: '#16297d', marginTop: 10}}>{title}</Text>
    </View>
    </View>
  )
}

export default ItemMobileServiceCard

const styles = StyleSheet.create({})