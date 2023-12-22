import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity ,StatusBar , Image, TextInput} from 'react-native'
import React from 'react'
  import AntDesign from 'react-native-vector-icons/AntDesign';
  import Feather from 'react-native-vector-icons/Feather';
  import EvilIcons from 'react-native-vector-icons/EvilIcons';

const ProfessionalDetail = ({navigation}) => {
  return (
  <SafeAreaView style={{flex: 1, backgroundColor: '#F2F2F2'}}>
    <View
  style={{
    width: '100%',
    height: 60,
    backgroundColor: '#16247d',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  }}>
  <TouchableOpacity
    activeOpacity={1}
    onPress={() => {
      navigation.navigate("ShopInformation")
    }}
    style={{
      position: 'absolute',
      left: 16,
      alignItems: 'center',
    }}>
    <AntDesign
      name="arrowleft"
      size={25}
      style={{
        color: 'white',
      }}
    />
  </TouchableOpacity>
  <Text
    style={{
      fontWeight: 'bold',
      fontSize: 17,
      color: 'white',
      textAlign: 'center',
    }}>
          Profesional Detail
  </Text>
</View>
      <StatusBar
        animated={true}
        backgroundColor="#19267d"

      />
      <View style={{justifyContent: 'center', alignItems: 'center',}}>
        <Image source={require('../../assets/lambo_car.jpg')} style={{width: '100%', height: 120}}/>
        <Image source={require('../../assets/barber.png')} style={{ borderRadius: 50, width: 80, height: 80, marginTop: -50}}/>
        <Text>
          Professor Boroeurn
        </Text>
        <Text>
         ⭐⭐⭐⭐⭐
        </Text>
        <Text>
          2 Reviews
        </Text>
      </View>
      <View style={{marginHorizontal: 5}}>
      <Text style={{fontWeight: 'bold' , marginVertical: 20}}>
        Profesional Information
      </Text>

      </View>
        <View style={{marginHorizontal: 10}}>
        <View style={{height: 40, width: '100%' , marginVertical: 5, backgroundColor: 'white', borderRadius: 5, flexDirection: 'row', alignItems: 'center',}}>
          <Feather name= "phone" size={20} style={{marginLeft: 20}} />
          <Text>  0292929229</Text>

        </View>
        <View style={{height: 40, width: '100%' , marginVertical: 5, backgroundColor: 'white', borderRadius: 5, flexDirection: 'row', alignItems: 'center',}}>
          <Feather name= "user" size={20} style={{marginLeft: 20}} />
          <Text>  Professor of Men Style</Text>

         </View>
        <View style={{height: 40, width: '100%' , marginVertical: 5, backgroundColor: 'white', borderRadius: 5, flexDirection: 'row', alignItems: 'center',}}>
          <Feather name= "mail" size={20} style={{marginLeft: 20}} />
          <Text>  prach.boroeurn@gmail.com</Text>

         </View>
        <View style={{height: 60, width: '100%' , marginVertical: 5, backgroundColor: 'white', borderRadius: 5, flexDirection: 'row', alignItems: 'center',}}>
          <EvilIcons name= "location" size={25} style={{marginLeft: 18}} />
          <Text style={{marginLeft: 5}}>
            #42, Street 454, Toul Tompong, 
            {'\n'}
            Phnom Penh, Cambodia
          </Text>

         </View>
          <View style={{flexDirection: 'row', alignItems: 'center' }}>
        <Image  source={require('../../assets/gmail.png')} style={{width: 40, height: 40, }}/>
        <Image  source={require('../../assets/telephone.png')} style={{width: 40, height: 40, marginHorizontal: 10}}/>
          </View>
        <Text style={{marginVertical: 5, fontWeight: 'bold'}}>
          Bio
        </Text>
        <View style={{height: 60, width: '100%' , marginVertical: 5, backgroundColor: 'white', borderRadius: 5, flexDirection: 'row', alignItems: 'center',}}>
          <Text style={{marginLeft: 40}}>Hi, I'm a Men Style professional. I have experience more than 10 years.</Text>

         </View>
        </View>
    </SafeAreaView>
  )
}

export default ProfessionalDetail

const styles = StyleSheet.create({})
