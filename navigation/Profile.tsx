import { StyleSheet, Text, View, Image, TextInput, Dimensions, Touchable } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/AntDesign'
import Feature from 'react-native-vector-icons/Feather'
import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import AntDesign from 'react-native-vector-icons/AntDesign'
const fontTitle = 14;
const Profile = ({navigation}) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
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
         Profile
        </Text>
      </View>
      <View style={{ alignItems: 'center' }}>
        <Image source={require('../assets/lambo_car.jpg')} style={{ height: 200, width: '100%' }} />
        <Image source={require('../assets/boroeurn.jpg')} style={{ height: 100, width: 100, borderRadius: 200, marginTop: -50 }} />
      </View>
      <View style={{ width: 70, height: 30, backgroundColor: 'green', alignSelf: 'center', marginTop: 20, alignItems: 'center', borderRadius: 10, justifyContent: 'center' }}>
        <Text style={{ color: 'white' }}>10 Point</Text>
      </View>
      <View style={{ height: 1, backgroundColor: '#003f5c', marginTop: 10 }} />
      <View style={{ marginHorizontal: 10 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
          <Text style={{ fontWeight: 'bold' }}>Account</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}><Text style={{ color: '#134286', textDecorationLine: 'underline' }}>Edit</Text>
            <Icon name="user" size={15} style={{ color: '#134286' }} /></View>
        </View>
        <View style={{ width: 'auto', height: 40, backgroundColor: '#f6f6f6', borderRadius: 10, marginVertical: 2, marginTop: 20, justifyContent: 'center' }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', }}>
            <Icon name="user" size={20} color="grey" />
            <TextInput />
          </View>
        </View>
        <View style={{ width: 'auto', height: 40, backgroundColor: '#f6f6f6', borderRadius: 10, marginVertical: 2, justifyContent: 'center' }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', }}>
            <Icon name="message1" size={20} color="grey" />
            <TextInput />
          </View>


        </View>
        <View style={{ width: 'auto', height: 40, backgroundColor: '#f6f6f6', borderRadius: 10, marginVertical: 2, justifyContent: 'center' }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', }}>
            <Feature name="alert-circle" size={20} color="grey" />
            <TextInput />
          </View>


        </View>
        <View style={{ width: 'auto', height: 40, backgroundColor: '#f6f6f6', borderRadius: 10, marginVertical: 2, justifyContent: 'center' }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: 3 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}><Icon name="phone" size={20} color="grey" />
              <Text style={{ marginLeft: 10 }}>+85511913234</Text></View>
            <Text style={{ color: '#134286', textDecorationLine: 'underline' }}>Edit</Text>
          </View>


        </View>
        <Text style={{ fontWeight: 'bold' }}>Security</Text>

        <View style={{ width: 'auto', height: 40, backgroundColor: '#f6f6f6', borderRadius: 10, marginTop: 20, marginVertical: 2, justifyContent: 'center' }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: 3 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}><Icon name="lock" size={20} color="grey" />
              <Text style={{ marginLeft: 10 }}>⭐️⭐️⭐️⭐️⭐️ (7)</Text></View>
            <Text style={{ color: '#134286', textDecorationLine: 'underline' }}>Edit</Text>
          </View>


        </View>

      </View>

    </SafeAreaView>
  )
}

export default Profile

const styles = StyleSheet.create({})
