// import {
//   StyleSheet,
//   Text,
//   View,
//   SafeAreaView,
//   ScrollView,
//   FlatList,
//   Button,
// } from 'react-native';
// import React, {useState} from 'react';
// import AntDesign from 'react-native-vector-icons/AntDesign';
// import {useNavigation} from '@react-navigation/native';
// import {Image} from '@rneui/base';
// import {TouchableOpacity} from 'react-native';


// const data = [
//   {
//     id: '1',
//     price: '$ 10.00 Up',
//     point: '2 pts',
//     img: require('../../assets/nail-polish.png'),
//     title: 'Nails',
//   },
//   {
//     id: '2',
//     price: '$ 10.00 Up',
//     point: '2 pts',
//     img: require('../../assets/makeup.png'),
//     title: 'Haircut for men',
//   },
//   {
//     id: '3',
//     price: '$ 10.00 Up',
//     point: '2 pts',
//     img: require('../../assets/cut.png'),
//     title: 'Haircut for men',
//   },
//   {
//     id: '4',
//     price: '$ 10.00 Up',
//     point: '2 pts',
//     img: require('../../assets/haircut-for-kid.png'),
//     title: 'Haircut for kids',
//   },
// ];

// const ChooseMobileServiceView = () => {
//   const navigation: any = useNavigation();
//   const [state, setState] = useState(false);
//   const [Index, SetValue] = useState<any>(null);
//   const setBtnNext = (value: any) => {
//     setState(!state);
//     console.log('Check Condition: ', state);
//   };
//   return (
//     <SafeAreaView style={{flex: 1}}>
//       <View style={styles.Appbar}>
//         <AntDesign
//           onPress={() => {
//             console.log('Back');
//             navigation.goBack();
//           }}
//           name="arrowleft"
//           color={'white'}
//           size={18}
//           style={{position: 'absolute', left: 15, top: 32}}></AntDesign>
//         <Text style={styles.TitleAppbar}>Choose Mobile Service</Text>
//       </View>
//       <Text style={styles.txtService}>Select Service</Text>
//       <FlatList
//         data={data}
//         numColumns={3}
//         keyExtractor={e => e.id}
//         renderItem={({item, index}) => {
//           return (
//             <TouchableOpacity
//               activeOpacity={1}
//               onPress={() => {
//                 console.log(index);
//                 if(Index === null){
//                   SetValue(index);
//                 }else{
//                   SetValue(null);
//                 }
//                 console.log(Index);
//               }}>
//               <View>
//                 <View style={styles.Card}>
//                   <Image
//                     style={{width: 60, height: 60}}
//                     source={item.img}></Image>
//                   <View
//                     style={{
//                       width: 20,
//                       height: 20,
//                       borderRadius: 20 / 2,
//                       borderWidth: 1,
//                       borderColor: 'grey',
//                       position: 'absolute',
//                       backgroundColor: Index === index? 'grey' : 'white',
//                       right: 0,
//                       marginTop: 6,
//                       marginRight: 6,
//                     }}></View>
//                   <Text
//                     style={{
//                       position: 'absolute',
//                       left: 0,
//                       fontSize: 10,
//                       color: 'white',
//                       padding: 5,
//                       backgroundColor: 'blue',
//                       borderBottomRightRadius: 5,
//                       borderTopLeftRadius: 5,
//                     }}>
//                     {item.price}
//                   </Text>
//                   <Text
//                     style={{
//                       position: 'absolute',
//                       left: 0,
//                       top: 30,
//                       backgroundColor: 'blue',
//                       padding: 2,
//                       color: 'white',
//                       borderBottomRightRadius: 5,
//                       fontSize: 10
//                     }}>
//                     {item.point}
//                   </Text>
//                 </View>
//                 <Text
//                   style={{color: 'blue', fontWeight: 'bold', paddingLeft: 15, fontSize: 14}}>
//                   {item.title}
//                 </Text>
//               </View>
//             </TouchableOpacity>
//           );
//         }}></FlatList>
//       {Index ?  (
//         <TouchableOpacity
//           activeOpacity={1}
//           onPress={() => {
//             navigation.push();
//           }}>
//           <View style={styles.btnNext}>
//             <Text style={{fontSize: 14, color: 'white', fontWeight: 'bold'}}>
//               Next
//             </Text>
//           </View>
//         </TouchableOpacity>
//       ) : null}
//     </SafeAreaView>
//   );
// };

// export default ChooseMobileServiceView;

// const styles = StyleSheet.create({
//   Appbar: {
//     width: 'auto',
//     height: 80,
//     backgroundColor: '#16247d',
//     flexDirection: 'row',
//     textAlign: 'center',
//     alignItems: 'center',
//     paddingHorizontal: 16,
//     justifyContent: 'center',
//     paddingVertical: 15
//   },
//   TitleAppbar: {
//     fontSize: 14,
//     color: 'white',
//   },
//   txtService: {
//     fontSize: 14,
//     paddingHorizontal: 15,
//     paddingTop: 15,
//     color: 'black',
//     fontWeight: 'bold',
//     backgroundColor: 'white',
//     paddingBottom: 20,
//     borderWidth: 0.3,
//   },
//   Card: {
//     width: 110,
//     height: 110,
//     backgroundColor: '#ebebec',
    
//     borderRadius: 8,
//     alignContent: 'center',
//     alignItems: 'center',
//     paddingTop: 25,
//   },
//   btnNext: {
//     paddingVertical: 13,
//     backgroundColor: '#16247d',
//     margin: 15,
//     borderRadius: 5,
//     alignContent: 'center',
//     alignItems: 'center',
//   },
// });


import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import ItemMobileServiceCard from './ItemMobileServiceCard';
import { useNavigation } from '@react-navigation/native';
const fontTitle = 14;

const OrderScreen = ({navigation}) => {
  return (
    <View style={{ flex: 1, backgroundColor: '#f2f2f2' }}>
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
          Choose Mobile Service
        </Text>
      </View>
      <View>
        <Text style={{ paddingVertical: 15, fontWeight: 'bold', marginHorizontal: 10 }}>Select Service</Text>

        <View style={{ width: '100%', height: 1, backgroundColor: 'black' }}></View>
        <View style={{ flexDirection: 'row', marginBottom: 20 , justifyContent:'space-between'}}>
          <ItemMobileServiceCard cash={'10.00$'} amount={'2pt'} title={'Nail'} image={require('../../assets/nail-polish.png')} />
          <ItemMobileServiceCard cash={'10.00$'} amount={'2pt'} title={'Make-up for Wedding'} image={require('../../assets/makeup.png')} />
          <ItemMobileServiceCard cash={'30.00$'} amount={'2pt'} title={'Haircut for Men'} image={require('../../assets/cut.png')} />
        </View>
        <ItemMobileServiceCard cash={'13.00$'} amount={'2pt'} title={'Haircut for Kids'} image={require('../../assets/haircut-for-kid.png')} />
      </View>
      <View style={{ flex: 1, justifyContent: 'flex-end', marginBottom: 20, marginHorizontal: 20 }}>
        <Button
          title="Next"
          color="#16297d"
          accessibilityLabel="Learn more about this purple button"
          onPress={() => {
            navigation.navigate("OrderDetail")
          }}
         
        />
      </View>
    </View>
  );
};

export default OrderScreen;

const styles = StyleSheet.create({});
