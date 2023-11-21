import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, View, TextInput, Text } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Image } from 'react-native';

export default function HomeScreen() {
    const phnomPenhRegion = {
        latitude: 11.5564,
        longitude: 104.9282,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05,
    };

    return (
        <View style={styles.container}>
            <MapView style={styles.map} region={phnomPenhRegion} />
            <Text style={{fontSize: 40, fontWeight: 'bold', color: 'white'}}>Coming Soon!</Text>

            <View style={styles.searchBar}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}><Icon name="menu" size={30} />
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Search Salon..."
                    /></View>
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
        justifyContent: 'center',
        alignItems: 'center'
    },
    map: {
        width: '100%',
        height: '100%',
        bottom: -25,
    },

    searchText: {
        fontSize: 16,
        fontWeight: 'bold',
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
        elevation: 4,
        zIndex: 1000, // Adjust the zIndex to make sure it's on top of the map
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
