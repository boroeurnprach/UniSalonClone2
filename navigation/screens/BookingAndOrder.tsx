import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    TouchableOpacity,
    Image,
    ScrollView,
  } from 'react-native';
  import React from 'react';
  import AntDesign from 'react-native-vector-icons/AntDesign';
  import {useNavigation} from '@react-navigation/native';
  import Feather from 'react-native-vector-icons/Feather';
  
  const Data = [
    {
      id: '1',
      name: 'មែន​ ស្តាយ',
      phoneNumber: '093383965',
      date: 'Sat, 18 Nov 2023 09:27 AM',
      status: 'Unpaid',
      price: '$ 10.00',
      image: require('../../assets/salon4.jpeg'),
      Service: 'ចាក់សាក់(Tattoo)',
    },
    {
      id: '2',
      name: 'មុីៗ សាឡន',
      phoneNumber: '011912312',
      date: 'Sat, 18 Nov 2023 11:16 AM',
      status: 'Unpaid',
      price: '$ 12.50',
      image: require('../../assets/salon4.jpeg'),
      Service: 'ម៉ាស់សាមុខ',
    },
    {
      id: '3',
      name: 'មែន​ ស្តាយ',
      phoneNumber: '093383965',
      date: 'Sat, 18 Nov 2023 11:10 AM',
      status: 'Unpaid',
      price: '$ 5.00',
      image: require('../../assets/haircut.jpg'),
      Service: 'កាត់សក់បែបCEO',
    },
    {
      id: '4',
      name: 'Mey Mey',
      phoneNumber: '099876755',
      date: 'Sat, 18 Nov 2023 02:52 AM',
      status: 'Unpaid',
      price: '$ 10.00',
      image: require('../../assets/salon4.jpeg'),
      Service: 'ម៉ាស្សាមុខ',
    },
    {
      id: '5',
      name: 'មែន​ ស្តាយ',
      phoneNumber: '093383965',
      date: 'Sat, 18 Nov 2023 09:27 AM',
      status: 'Unpaid',
      price: '$ 25.00',
      image: require('../../assets/salon3.jpeg'),
      Service: 'Make-up for Wedding',
    },
  ];
  const fontTitle = 14;
  const BookingAndOrder = () => {
    const navigation: any = useNavigation();
    return (
      <SafeAreaView>
       
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
            navigation.navigate("MainTabs");
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
        Booking & Order
        </Text>
      </View>
          <ScrollView showsVerticalScrollIndicator={false}>
          {Data.map((e, index) => {
            return (
              <View
                style={{
                  backgroundColor: 'white',
                  width: '95%',
                  height: 250,
                  alignSelf: 'center',
                  marginTop: 10,
                  borderRadius: 5,
                  elevation: 3,
                }}>
                <View style={{width: '100%', height: '75%'}}>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <View style={{width: '25%'}}>
                      <View
                        style={{
                          backgroundColor: '#008b8b',
                          width: 60,
                          borderBottomEndRadius: 7,
                          borderTopStartRadius: 7,
                          padding: 2,
                        }}>
                        <Text
                          style={{
                            color: 'white',
                            textAlign: 'center',
                            fontWeight: 'bold',
                            fontSize: 13,
                          }}>
                          Booking
                        </Text>
                      </View>
                      <Image
                        source={e.image}
                        style={{
                          width: 70,
                          height: 70,
                          borderRadius: 50,
                          marginLeft: '10%',
                        }}></Image>
                    </View>
                    <View style={{width: '75%'}}>
                      <Text
                        style={{
                          fontSize: 16,
                          color: '#16247d',
                          fontWeight: 'bold',
                          paddingTop: 10,
                        }}>
                        {e.name}
                      </Text>
                      <Text style={{fontSize: 14, color: 'black', paddingTop: 5}}>
                        {e.phoneNumber}
                      </Text>
                      <Text style={{paddingTop: 5, fontSize: 14, color: 'red'}}>
                        {e.date}
                      </Text>
                    </View>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity
                      style={{
                        backgroundColor: '#DCDCDC',
                        marginTop: '5%',
                        paddingVertical: 5,
                        paddingHorizontal: 10,
                        marginLeft: '4%',
                        borderRadius: 15,
                      }}>
                      <Text style={{color: '#16247d', fontSize: 14}}>
                        {e.Service}
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <View
                  style={{
                    width: '100%',
                    height: '25%',
                    // backgroundColor: 'cyan',
                    flexDirection: 'row',
                    alignItems: 'center',
                    borderTopWidth: 0.3,
                    justifyContent: 'space-between',
                    paddingHorizontal: '3%',
                  }}>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={{color: 'red', fontSize: 16}}>{e.price}</Text>
                    <Text
                      style={{
                        backgroundColor: 'orange',
                        paddingHorizontal: 10,
                        paddingVertical: 2,
                        borderRadius: 20,
                        color: 'white',
                        fontSize: 14,
                        fontWeight: 'bold',
                        marginLeft: '5%',
                      }}>
                      {e.status}
                    </Text>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity
                      onPress={() => {
                        navigation.push('ShopInformation');
                      }}>
                      <Image
                        source={require('../../assets/user.png')}
                        style={{
                          marginRight: 10,
                          width: 25,
                          height: 25,
                        }}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => {
                        navigation.push('Message');
                      }}>
                      <Image
                        source={require('../../assets/gmail.png')}
                        style={{marginRight: 10, width: 25, height: 25}}></Image>
                    </TouchableOpacity>
                    <Image
                      source={require('../../assets/telephone.png')}
                      style={{width: 25, height: 25}}></Image>
                  </View>
                </View>
              </View>
            );
          })}
        </ScrollView>
      </SafeAreaView>
    );
  };
  
  export default BookingAndOrder;
  
  const styles = StyleSheet.create({});
