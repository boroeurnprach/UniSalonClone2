import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';

const NewSalon = ({ image, nameShop, rate }) => {
    return (
        <View style={{ backgroundColor: 'white', height: 150, width: 180, borderRadius: 2, marginHorizontal: 3, elevation: 3 }}>
            <Image style={{ width: '100%', height: '30%', borderRadius: 2 }} source={image} />
            <View style={{ margin: 10 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                    </View>

                </View>
                <Text>{nameShop}</Text>
                <Text style={{ fontSize: 10 }}>{rate}</Text>

                <View style={{ borderColor: '#134286', justifyContent: 'center', width: 160, height: 30, borderWidth: 1, alignSelf: 'center', padding: 3, borderRadius: 4, marginTop: 10 }}>
                    <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                        <Text style={{ color: '#134286', fontWeight: 'bold' }}>Booking Now</Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default NewSalon;

const styles = StyleSheet.create({});