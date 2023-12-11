import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
const ProfessorCard = ({ image, namePro, navigation, rate }) => {
  return (
    <TouchableOpacity onPress={navigation}>
      <View style={{ width: 120, height: 180, backgroundColor: 'white', borderRadius: 10, justifyContent: 'center', alignItems: 'center', marginHorizontal: 3, elevation: 1 }}>
        <Image source={image} style={{ width: 80, height: 80 }} />
        <Text style={{ fontSize: 12, color: 'blue' }}>{namePro}</Text>
        <Text style={{ fontSize: 10 }}>{rate}</Text>
        <Text style={{ fontSize: 10, fontWeight: 'bold', marginTop: 5 }}>Professor of...</Text>
      </View>
    </TouchableOpacity>
  )
}
export default ProfessorCard

const styles = StyleSheet.create({})
