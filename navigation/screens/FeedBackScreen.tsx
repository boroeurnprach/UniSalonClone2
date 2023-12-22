import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import React from 'react'
const fontTitle = 14;
const FeedBackScreen = ({navigation}) => {
  return (
   
  <View
        style={{
          width: '100%',
          height: 60,
          backgroundColor: '#134286',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <AntDesign
          onPress={() => {
            navigation.navigate("MainTabs");
          }}
          name="arrowleft"
          size={20}
          style={{
            color: 'white',
            position: 'absolute',
            left: 10,
            justifyContent: 'center',
            alignItems: 'center',           
          
          }}
        />
        <Text
          style={{
            fontWeight: 'bold',
    fontSize: fontTitle,
    color: 'white',
    textAlign: 'center',
    
          }}>
         Help & Feedback
        </Text>
      </View>
  )
}

export default FeedBackScreen

const styles = StyleSheet.create({})