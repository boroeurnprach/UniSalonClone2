import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const CategoryItem = ({text, image, bgColor}) => {
  return (
    <View style={{alignItems: 'center', height: 50, width: 50, borderRadius: 100, backgroundColor: bgColor, marginHorizontal: 10,}}>
                   <Image source={image}  style={{ height: 30, width: 30, marginVertical: 9}} />
                   <Text style={{fontSize: 8}}>{text}</Text>
                   </View>
  )
}

export default CategoryItem;

const styles = StyleSheet.create({})