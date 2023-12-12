import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import ServiceCard from '../../compoment/ServiceCard'

const fontTitle = 14;

const OrderDetail = ({ navigation }) => {
  return (
    <View>
      <View
        style={{
          width: '100%',
          height: 60,
          backgroundColor: '#16247d',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <AntDesign
          onPress={() => {
            navigation.navigate("ShopInformation");
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
          Order Details
        </Text>
      </View>
        <View style={{ marginHorizontal: 5 }}>
        <Text style={{ color: '#16297d', fontWeight: 'bold' }}>Shop Information</Text>
        <View style={{ flexDirection: 'row', marginHorizontal: 20 }}>
          <View style={{ alignItems: 'flex-end', }}>
            <Text>Name:</Text>
            <Text>Phone:</Text>
            <Text>Address:</Text>
          </View>
          <View style={{ marginHorizontal: 10 }}>
            <Text>
              មែន ស្ដាយ
            </Text>
            <Text>
              011913234
            </Text>
            <Text>
              103 St. 512, Phnom Penh, Cambodia
            </Text>
          </View>
        </View>
        <View style={{ height: 1, width: '100%', backgroundColor: 'lightgrey', marginVertical: 20 }}></View>

        <Text style={{ color: '#16297d', fontWeight: 'bold' }}>Order Detail</Text>

        <View style={{ flexDirection: 'row', marginHorizontal: 20 }}>
          <View style={{ alignItems: 'flex-end', }}>
            <Text>Date:</Text>
            <Text>Status:</Text>
          </View>
          <View style={{}}>
            <Text>
              Thurday, 4 December 2023
            </Text>
            <View style={{ height: 18, width: 60, backgroundColor: 'green', borderRadius: 10, justifyContent: 'center' }}>
              <Text style={{ alignSelf: 'center', color: 'white', fontSize: 12, fontWeight: 'bold' }}>Order</Text>
            </View>
          </View>
        </View>
        <View style={{ height: 1, width: '100%', backgroundColor: 'lightgrey', marginVertical: 20 }}></View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Text style={{ color: '#16297d', fontWeight: 'bold' }}>
            Select Service
          </Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ color: '#16297d', fontWeight: 'bold', textDecorationLine: 'underline' }}>
              Add Services
            </Text>
            <AntDesign name='plus' size={20} style={{ color: '#16297d' }} />
          </View>
        </View>
        <ServiceCard />
        <View style={{ height: 1, width: '100%', backgroundColor: 'lightgrey', marginVertical: 20 }}></View>
        <Text style={{ color: '#16297d', fontWeight: 'bold', marginVertical: 10 }}>Payment Summary</Text>

        <View style={{ flexDirection: 'row', marginHorizontal: 20 }}>
          <View style={{ alignItems: 'flex-end', }}>
            <Text>Total Amount:</Text>
            <Text>Discount:</Text>
            <Text>Grand Total:</Text>
            <Text>Spent Points:</Text>
            <Text>Total Points:</Text>
            <Text>Status:</Text>
            <Text>Payment Type:</Text>
          </View>
          <View style={{ marginHorizontal: 10 }}>
            <Text style={{ fontWeight: 'bold' }}>
              $10.00
            </Text>
            <Text style={{ fontWeight: 'bold' }}>
              $0.00
            </Text>
            <Text style={{ color: 'red', fontWeight: 'bold' }}>
              $10.00
            </Text>
            <Text style={{ fontWeight: 'bold' }}>
              0 pts
            </Text>
            <Text style={{ fontWeight: 'bold', textDecorationLine: 'underline', color: '#16297d' }}>
              2 pts
            </Text>
            <Text style={{ fontWeight: 'bold' }}>
              Unpaid
            </Text>
            <Text style={{ fontWeight: 'bold', }}>
              None
            </Text>
          </View>
        </View>
        <View style={{ height: 1, width: '100%', backgroundColor: 'lightgrey', marginVertical: 20 }}></View>
        <View style={{ height: 40, width: '100%', backgroundColor: '#0089BD', justifyContent: 'center', alignItems: 'center', }}>
          <Text style={{ color: 'white', fontWeight: 'bold' }}>Submit Order</Text>
        </View>

      </View>
    </View>
  )
}

export default OrderDetail

const styles = StyleSheet.create({})
