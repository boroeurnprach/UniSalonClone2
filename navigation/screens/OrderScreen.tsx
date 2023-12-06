import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import ItemMobileServiceCard from './ItemMobileServiceCard';
import { useNavigation } from '@react-navigation/native';

const OrderScreen = ({navigation}) => {
  return (
    <View style={{ flex: 1, backgroundColor: '#f2f2f2' }}>
      <View
        style={{
          width: '100%',
          height: 80,
          backgroundColor: '#16247d',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {
           navigation.navigate("ShopInformation")
          }}>
          <AntDesign
            name="arrowleft"
            size={25}
            style={{
              color: 'white',
              paddingLeft: '1%',
            }}
          />
        </TouchableOpacity>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 17,
            color: 'white',
            textAlign: 'center',
            paddingLeft: '15%',
          }}>
          Choose Mobile Service
        </Text>
      </View>
      <View>
        <Text style={{ paddingVertical: 15, fontWeight: 'bold', marginHorizontal: 10 }}>Select Service</Text>

        <View style={{ width: '100%', height: 1, backgroundColor: 'black' }}></View>
        <View style={{ flexDirection: 'row', marginBottom: 20 }}>
          <ItemMobileServiceCard cash={'10.00$'} amount={'2pt'} title={'Nail'} image={require('../../assets/nail-polish.png')} />
          <ItemMobileServiceCard cash={'10.00$'} amount={'2pt'} title={'Make-up for Wedding'} image={require('../../assets/makeup.png')} />
          <ItemMobileServiceCard cash={'30.00$'} amount={'2pt'} title={'Haircut for Men'} image={require('../../assets/cut.png')} />
        </View>
        <ItemMobileServiceCard cash={'13.00$'} amount={'2pt'} title={'Haircut for Kids'} image={require('../../assets/haircut-for-kid.png')} />
      </View>
      <View style={{ flex: 1, justifyContent: 'flex-end', marginBottom: 20, marginHorizontal: 20 }}>
        <Button
          title="Learn More"
          color="#16297d"
          accessibilityLabel="Learn more about this purple button"
          onPress={() => {
            navigation.navigate("LoginScreen")
          }}
         
        />
      </View>
    </View>
  );
};

export default OrderScreen;

const styles = StyleSheet.create({});
