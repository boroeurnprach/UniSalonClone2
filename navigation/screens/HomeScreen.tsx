import React, {useState} from 'react';
import MapView from 'react-native-maps';
import BottomSheet from '@gorhom/bottom-sheet';
import { StyleSheet, View, TextInput, Text, ScrollView, StatusBar} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Image } from 'react-native';
import GoogleMap from '../../compoment/GoogleMap';
import CategoryView from '../../compoment/CategoryView';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons'


export default function HomeScreen({ navigation }) {
    const [isImage1, setIsImage1] = useState(true);

  const toggleImage = () => {
    setIsImage1(!isImage1);
  };
    return (
        <View style={{flex:1}}>
            <StatusBar
        animated={true}
        backgroundColor="#16247d"
    
      />
            <GoogleMap />


            <View style={styles.searchBar}>
            <View style={{flexDirection:'row', alignItems: 'center'}}>
          <TouchableOpacity onPress={()=> navigation.openDrawer()}>
          <MaterialIcon name="menu" size={22} color={'black'}/>
            </TouchableOpacity>
            <TextInput placeholder="Search Salons..." style={{fontSize:14, color:'black', marginLeft:10}}/>
            </View>
            <View style={{flexDirection:'row'}}>
                <MaterialIcon name="search" size={22} color={'black'}/>
                <TouchableOpacity onPress={toggleImage}>
                <Image
                    style={{ width: 20, height: 20, borderRadius: 50, marginHorizontal: 5 }}
                    source={isImage1 ? require('../../assets/khmer_flag.png') : require('../../assets/uk_flag.png')}
                />
            </TouchableOpacity>
            <MaterialIcon name="notifications-none" size={22} style={{ marginHorizontal: 5 }} />
            </View>
                </View>



            <View style={{width:'auto', marginTop:10,marginLeft:5}}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{}}>
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
          

        </View>
    );
}

const styles = StyleSheet.create({
    // container: {
    //     flex: 1,

    // },

    searchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        // position: 'absolute',
        marginTop:10,
        alignSelf: 'center',
        backgroundColor: 'white',
        borderRadius: 5,
        elevation: 1,
        height: 50,
        width: '95%',
        justifyContent:'space-between'
    },
    searchInput: {
        height: 30,
       
       marginHorizontal: 5
    },
    iconsearchLangNotify: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        marginHorizontal: 5,
       
        
    },
    image: {
        width: 20, // adjust the width and height according to your design
        height: 20,
        // other styles as needed
    },


});