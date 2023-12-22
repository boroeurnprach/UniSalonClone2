import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons'; 

const ServiceCard = () => {
  return (
    <View style={{ marginTop: 40, height: 80, width: '100%', flexDirection: 'row', justifyContent: 'space-between'}}>
   
    
    <View style={{flexDirection: 'row'}}>
    <View style={{height: 80, width: 60, backgroundColor: 'lightgrey', borderRadius: 10,  justifyContent: 'center', alignItems: 'center'}}>
        <Image source={(require('../assets/nail-polish.png'))} style={{width: 40, height: 40}}/>
    </View>
    <View style={{marginLeft: 5}}>
        <Text style={{color: '#134286', fontWeight: 'bold'}}>
            Nail
        </Text>
        <Text style={{fontSize: 10}}>
        Points: 2pts
        </Text>
                </View>
    </View>
            <View>
        </View>
        <View style={{alignItems: 'flex-end' }}>
    <View style={{ height: 30, width: 25, backgroundColor: 'lightgrey', borderRadius: 20, justifyContent: 'center', alignItems: 'center' }}>
        <Entypo name="dots-three-vertical" size={15} color="black" />
    </View>
    <Text style={{marginRight: 10, fontWeight: 'bold'}}>$10.00 (1)</Text>
</View>

    
    </View>
  )
}

export default ServiceCard

const styles = StyleSheet.create({})
