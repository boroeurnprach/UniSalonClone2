import { StyleSheet, Text, View, SafeAreaView, TextInput, ScrollView, Dimensions } from 'react-native'
import React from 'react'
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import Card3 from '../../Card3';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { MaterialIcons } from '@expo/vector-icons';
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

const VideoScreen = ({ navigation }) => {
    return (

        <View>
            {/* <View style={{ backgroundColor: '#144389', height: 80, justifyContent: 'center', paddingTop: 20, }}>
                <View style={{
                    position: 'absolute',
                    left: 10,
                    paddingTop: 20,
                }}>
                    <MaterialIcons name="menu" size={30} color="white" />
                </View>
                <View style={{ width: Dimensions.get('window').width }}>
                    <Text style={{ textAlign: 'center', color: 'white', fontSize: 20, }}>Videos</Text>
                </View>
            </View> */}
            <View
                style={{
                    width: '100%',
                    height: 80,
                    backgroundColor: '#16247d',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',


                }}>
                <Feather
                    onPress={() => {
                    }}
                    name="menu"
                    size={24}
                    style={{
                        position: 'absolute',
                        left: 10,

                        color: 'white',
                    }}
                />
                <View style={{ width: Dimensions.get('window').width }}>
                    <Text
                        style={{
                            textAlign: 'center', color: 'white', fontSize: 20,
                        }}>
                        Videos
                    </Text>
                </View>

            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', margin: 12, backgroundColor: 'white', height: 50, borderRadius: 5 }}>
                        <EvilIcons name="search" size={25} color='grey' />
                        <TextInput placeholder="Search Videos..." />
                    </View>
                </View>

                <View style={{ flexDirection: 'row', marginTop: 10, justifyContent: 'center' }}>
                    <View style={{ flex: 1, height: 1, backgroundColor: 'grey' }} />

                </View>



                <View style={{ marginBottom: 150 }}>
                    <Card3 image={require('../../assets/bird.jpeg')} description="ទំនុកចិត្ដជាមួយយើងខ្ញុំ" date="17 Dec 2021 at 11:59 AM" onPress={() => navigation.push('Videos')} />
                    <Card3 image={require('../../assets/barber.png')} description="ទំនុកចិត្ដជាមួយយើងខ្ញុំ" date="17 Dec 2021 at 11:59 AM" onPress={() => navigation.push('Videos')} />
                    <Card3 image={require('../../assets/boroeurn.jpg')} description="ទំនុកចិត្ដជាមួយយើងខ្ញុំ" date="17 Dec 2021 at 11:59 AM" onPress={() => navigation.push('Videos')} />
                    <Card3 image={require('../../assets/bird.jpeg')} description="ស្រស់ស្អាតជាមួយនឹងយើង" date="17 Dec 2021 at 11:59 AM" onPress={() => navigation.push('Videos')} />
                    <Card3 image={require('../../assets/bird.jpeg')} description="ស្រស់ស្អាតជាមួយនឹងយើង" date="17 Dec 2021 at 11:59 AM" onPress={() => navigation.push('Videos')} />

                </View>

            </ScrollView>
        </View>

    )
}

export default VideoScreen

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        backgroundColor: '#144389',
        height: 60,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'space-between',
        // marginRight: '50%',
        // justifyContent: 'center',


    },
    textShop: {
        color: 'white',
        paddingLeft: '35%',
        fontWeight: 'bold'
    },
    icon: {
        marginLeft: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },

})