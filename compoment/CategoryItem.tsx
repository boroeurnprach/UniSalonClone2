import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const CategoryItem = ({text, image, bgColor}) => {
  return (
    <View style={{alignItems: 'center', height: 40, width: 40, borderRadius: 100, backgroundColor: bgColor, marginHorizontal: 15, alignContent: 'center'}}>
                   <Image source={image}  style={{ height: 20, width: 20, marginVertical: 10, marginHorizontal: 20}} />
                   <Text style={{fontSize: 7, textAlign: 'center'}}>{text}</Text>
                   </View>
  )
}

export default CategoryItem;

const styles = StyleSheet.create({})