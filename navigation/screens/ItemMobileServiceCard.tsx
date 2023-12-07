import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const ItemMobileServiceCard = ({ image, cash, amount, title }) => {
  const [isPressed, setIsPressed] = useState(false);

  const handlePress = () => {
    setIsPressed(!isPressed);
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View>
        <View
          style={{
            width: 100,
            height: 150,
            backgroundColor: '#ffffff',
            borderRadius: 5,
            margin: 10,
            elevation: 2,
          }}
        >
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View
              style={{
                width: 70,
                height: 40,
                backgroundColor:'#87ceeb',
                borderBottomRightRadius: 5,
                borderTopLeftRadius: 5,
                marginBottom: 5,
              }}
            >
              <Text style={{ color: 'white', fontSize: 12 }}>{cash}</Text>
              <Text style={{ color: 'white', fontSize: 12 }}>{isPressed ? 'Down' : 'Up'}</Text>
            </View>
            <View
              style={{
                height: 20,
                width: 20,
                borderRadius: 50,
                borderWidth: 1,
                borderColor: 'lightgrey',
                backgroundColor: isPressed ? 'lightgrey' : 'white',
                margin: 5,
              }}
            ></View>
          </View>
          <View
            style={{
              width: 30,
              height: 20,
              backgroundColor: '#87ceeb',
              borderBottomRightRadius: 5,
              borderTopLeftRadius: 5,
            }}
          >
            <Text style={{ color: 'white', fontSize: 12 }}>{amount}</Text>
          </View>
          <View style={{ alignSelf: 'center', marginTop: 30 }}>
            <Image source={image} style={{ width: 50, height: 50 }} />
          </View>
          <Text style={{ color: '#16297d', marginTop: 10 }}>{title}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ItemMobileServiceCard;

const styles = StyleSheet.create({});
