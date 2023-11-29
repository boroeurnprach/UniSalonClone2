import React from 'react';
import MapView from 'react-native-maps';
import BottomSheet from '@gorhom/bottom-sheet';
import { StyleSheet, View, TextInput, Text, ScrollView } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Image } from 'react-native';
import GoogleMap from '../../compoment/GoogleMap';
import CategoryView from '../../compoment/CategoryView';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons'


export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <GoogleMap />
            <View style={{ marginTop: 1 }}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>

                    <CategoryView text="All" hasIcon={false} iconName="shopping-store" />
                    <CategoryView text="Mobile Services" hasIcon={false} iconName="shopping-store" />
                    <CategoryView text="Shops" hasIcon={true} iconName="shopping-store" />
                    <CategoryView text="Professors" hasIcon={true} iconName="scissors" />


                </ScrollView>


            </View>
            <View style={{ flex: 1, justifyContent: 'center', alignContent: 'flex-end', marginLeft: '85%' }}>
                <View style={{ width: 40, height: 40, borderRadius: 40, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', marginBottom: 10 }}>
                    <Ionicons name="reload" size={22}></Ionicons>
                </View>
                <View style={{ width: 40, height: 40, borderRadius: 40, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
                    <MaterialIcon name="my-location" size={22}></MaterialIcon>
                </View>

            </View>
            <View style={styles.searchBar}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Icon name="menu" size={30} />
                    <TextInput style={styles.searchInput} placeholder="Search Salon..." />
                </View>
                <View style={styles.iconsearchLangNotify}>
                    <MaterialIcon name="search" size={20} />
                    <Image
                        style={{ width: 20, height: 20, borderRadius: 50 }}
                        source={require('../../assets/khmer_flag.png')}
                    />
                    {/* <MaterialCommunityIcons name="heart-outline" size={20} /> */}
                    <MaterialIcon name="notifications-none" size={20} />
                </View>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#16247d',

    },

    searchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        position: 'absolute',
        top: 40,
        left: 10,
        right: 10,
        backgroundColor: 'white',
        borderRadius: 5,
        elevation: 4, // Adjust the zIndex to make sure it's on top of the map
    },
    searchInput: {
        height: 30,
        paddingLeft: 10,
    },
    iconsearchLangNotify: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        marginLeft: '35%',
        justifyContent: 'space-between',
    },
    image: {
        width: 20, // adjust the width and height according to your design
        height: 20,
        // other styles as needed
    },


});