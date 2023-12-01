import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Profile = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ alignItems: 'center' }}>
        <Image source={require('../assets/lambo_car.jpg')} style={{ height: 200, width: '100%' }} />
        <Image source={require('../assets/boroeurn.jpg')} style={{ height: 100, width: 100, borderRadius: 200, marginTop: -50 }} />
      </View>
      <View style={{ width: 70, height: 30, backgroundColor: 'green', alignSelf: 'center', marginTop: 19, alignItems: 'center', borderRadius: 10 }}>
        <Text style={{ color: 'white', alignSelf: 'center' }}>0 Point</Text>
      </View>
      <View style={{ height: 1, backgroundColor: '#003f5c', marginTop: 10 }} />
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 10}}>
        <Text>Account</Text>
        <Text>Edit</Text>
      </View>
    </SafeAreaView>
  )
}

export default Profile

const styles = StyleSheet.create({})
