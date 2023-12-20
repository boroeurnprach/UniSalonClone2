import { StyleSheet, Text, View, TextInput } from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

const fontTitle = 14;

const ForgotPasswordScreen = ({ navigation }) => {
  return (
    <View>
      <View
        style={{
          width: '100%',
          height: 60,
          // backgroundColor: '#16247d',
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
            color: 'black',
            position: 'absolute',
            left: 10,
            justifyContent: 'center',
            alignItems: 'center',

          }}
        />

      </View>
      <View style={{ justifyContent: 'center', alignItems: 'center', marginHorizontal: 10 }}>
        <Text style={{ fontWeight: 'bold' }}>Forgot Password</Text>
        <Text style={{ marginBottom: 50 }}>Eenter Phone Number</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center', width: '95%', height: 50, alignSelf: 'center' }}>
          <View style={{ width: '80%', height: '100%', backgroundColor: 'white', borderBottomLeftRadius: 10, borderTopLeftRadius: 10, marginVertical: 10, flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ marginLeft: 20 }}>+855 |</Text>
            <TextInput placeholder="Phone Number" style={{ marginLeft: 10 }}></TextInput>
          </View>
          <View style={{ width: '20%', height: '100%', backgroundColor: '#16247d', justifyContent: 'center', borderBottomRightRadius: 10, borderTopRightRadius: 10 }}>
            <Text style={{ color: 'white', textAlign: 'center' }}>Send</Text>
          </View>
        </View>
        <View style={{ width: '95%', height: 50, backgroundColor: 'white', borderRadius: 10, marginVertical: 10, justifyContent: 'center' }}>
          <TextInput placeholder="Code" style={{ marginLeft: 20 }} keyboardType='numeric'></TextInput>
        </View>
        <View style={{ width: '95%', height: 40, backgroundColor: '#16247d', justifyContent: 'center' }}>
          <Text style={{ color: 'white', textAlign: 'center' }}>Next</Text>
        </View>
      </View>
    </View>
  )
}

export default ForgotPasswordScreen

const styles = StyleSheet.create({})
