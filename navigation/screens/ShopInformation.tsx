import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
  requireNativeComponent,
  StatusBar

} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ProfessorCard from '../../compoment/ProfessorCard';
import MobileServiceCard from '../../compoment/MobileServiceCard';


const ShopInformation = ({ navigation }) => {
  // const navigation: any = useNavigation();
  // const [text, onChangeText] = React.useState('');

  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{


            width: '100%',
            height: 80,
            backgroundColor: '#16247d',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: '5%',

          }}>
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => {
              navigation.goBack();
            }}>
            <AntDesign
              name="arrowleft"
              size={25}
              style={{
                color: 'white',
              }}
            />
          </TouchableOpacity>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 17,
              color: 'white',
              textAlign: 'center',
            }}>
            Shop Information
          </Text>
          <AntDesign
            name="hearto"
            size={25}
            style={{
              color: 'white',
            }}
          />

        </View>

        <View style={{ flexDirection: 'row' }}>
          <Image
            source={require('../../assets/salon3.jpeg')}
            style={{
              backgroundColor: 'grey',
              width: '100%',
              height: 150,
            }}></Image>
          <Entypo
            name="camera"
            size={24}
            color={'black'}
            style={{
              marginLeft: -80,
              marginTop: 120,
            }}></Entypo>
        </View>
        <Image
          source={require('../../assets/barber.png')}
          style={{
            marginTop: -50,
            alignSelf: 'center',
            backgroundColor: 'grey',
            borderRadius: 50,
            width: 100,
            height: 100,
          }}></Image>
        <Text
          style={{
            color: 'black',
            fontSize: 15,
            fontWeight: 'bold',
            textAlign: 'center',
            marginTop: 5,
          }}>
          មែន​​ ស្តាយ
        </Text>
        <Text
          style={{
            textAlign: 'center',
            marginTop: 5,
          }}>
          ⭐⭐⭐⭐⭐
        </Text>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {

          }}>
          <Text
            style={{
              fontSize: 15,
              textDecorationLine: 'underline',
              color: 'grey',
              marginTop: 5,
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
            3 Reviews
          </Text>
        </TouchableOpacity>
        <View
          style={{
            borderBottomWidth: 0.3,
            marginTop: 5,
          }}></View>
        <Text
          style={{
            color: 'black',
            fontSize: 16,
            fontWeight: 'bold',
            marginLeft: 20,
            marginTop: 15,
          }}>
          Account
        </Text>
        <View style={styles.form}>
          <FontAwesome
            name="building-o"
            size={20}
            color={'black'}
            style={{
              marginLeft: 15,
            }}
          />
          <Text
            style={{
              marginLeft: 15,
              fontSize: 14,
              color: 'black',
            }}>
            មែន​ ស្តាយ
          </Text>
        </View>
        <View style={styles.form}>
          <Feather
            name="mail"
            size={20}
            color={'black'}
            style={{
              marginLeft: 15,
            }}
          />
          <Text
            style={{
              marginLeft: 14,
              fontSize: 15,
              color: 'black',
            }}>
            phanphorn.engineer@gmail.com
          </Text>
        </View>
        <View
          style={{

            width: '90%',
            height: 100,
            backgroundColor: 'white',
            flexDirection: 'row',
            alignSelf: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 5,
            flex: 1,
            marginTop: 10,

          }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
            <AntDesign
              name="infocirlceo"
              size={22}
              color={'black'}
              style={{
                marginLeft: 10,
                marginTop: -40,


              }}
            />
            <Text
              style={{
                fontSize: 14,
                marginLeft: 8,
                color: 'black',
                flex: 1,
                marginTop: -40
              }}>
              បម្រើសេវាកម្មជូនអស់លោក លោកស្រីអោយកាន់តែមាន..
            </Text>
          </View>
        </View>
        <View style={styles.form}>
          <Ionicons
            name="call-outline"
            size={20}
            color={'black'}
            style={{
              marginLeft: 15,
            }}
          />
        </View>
        <View style={styles.form}>
          <Feather
            name="smartphone"
            size={20}
            color={'black'}
            style={{
              marginLeft: 15,
            }}
          />
          <Text
            style={{
              marginLeft: 15,
              fontSize: 14,
              color: 'black',
            }}>
            0889286027
          </Text>
        </View>
        <View style={styles.form}>
          <AntDesign
            name="calendar"
            size={20}
            color={'black'}
            style={{
              marginLeft: 15,
            }}
          />
          <Text
            style={{
              marginLeft: 15,
              fontSize: 14,
              color: 'black',
            }}>
            Mon, Tue, Wed, Thu, Fri, Sat, Sun
          </Text>
        </View>
        <View style={styles.form}>
          <Ionicons
            name="time-outline"
            size={20}
            color={'black'}
            style={{
              marginLeft: 15,
            }}
          />
          <Text
            style={{
              marginLeft: 15,
              fontSize: 14,
              color: 'black',
            }}>
            8:00 - 19:00
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: '5%',
          }}>
          <Text
            style={{
              fontSize: 16,
              color: 'black',
              fontWeight: 'bold',
              marginTop: 10,
            }}>
            Address
          </Text>

          <TouchableOpacity
            style={{ flexDirection: 'row' }}
            activeOpacity={1}
            onPress={() => {

            }}>
            <Text
              style={{
                textDecorationLine: 'underline',
                fontSize: 16,
                color: '#16247d',
                fontWeight: 'bold',
                marginTop: 10,
              }}>
              Direction
            </Text>
            <Entypo
              name="location-pin"
              size={20}
              color={'#16247d'}
              style={{
                marginTop: 10,
              }}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.form}>
          <Entypo
            name="location-pin"
            size={20}
            color={'black'}
            style={{
              marginLeft: 15,
            }}
          />
          <Text
            style={{
              marginLeft: 15,
              fontSize: 14,
              color: 'black',
            }}>
            103 St 512, Phnom Penh, Cambodia
          </Text>
        </View>
        <View
          style={{
            borderBottomWidth: 0.3,
            marginTop: 10,
          }}></View>
        <Text
          style={{
            fontWeight: 'bold',
            marginTop: 10,
            marginLeft: 20,
            fontSize: 16,
            color: 'black',
          }}>
          Features
        </Text>
        <TouchableOpacity
          onPress={() => {

          }}
          style={{
            flexDirection: 'row',
            backgroundColor: 'white',
            height: 50,
            width: '90%',
            alignSelf: 'center',
            marginTop: 10,
            alignItems: 'center',
            borderRadius: 8,
            justifyContent: 'space-between',
            paddingHorizontal: '5%',
          }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image
              source={require('../../assets/loudspeaker.png')}
              style={{ width: 25, height: 25 }}></Image>
            <Text
              style={{
                fontSize: 15,
                color: '#16247d',
                alignItems: 'center',
                paddingLeft: '5%',
              }}>
              PROMOTION
            </Text>
          </View>
          <AntDesign name="right" size={22} color={'#16247d'} style={{}} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {

          }}
          style={{
            flexDirection: 'row',
            backgroundColor: 'white',
            height: 50,
            width: '90%',
            alignSelf: 'center',
            marginTop: 10,
            alignItems: 'center',
            borderRadius: 8,
            justifyContent: 'space-between',
            paddingHorizontal: '5%',
          }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image
              source={require('../../assets/cream.png')}
              style={{ width: 25, height: 25 }}></Image>
            <Text
              style={{
                fontSize: 15,
                color: '#16247d',
                alignItems: 'center',
                paddingLeft: '5%',
              }}>
              OUR SERVICES
            </Text>
          </View>
          <AntDesign name="right" size={22} color={'#16247d'} style={{}} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {

          }}
          style={{
            flexDirection: 'row',
            backgroundColor: 'white',
            height: 50,
            width: '90%',
            alignSelf: 'center',
            marginTop: 10,
            alignItems: 'center',
            borderRadius: 8,
            justifyContent: 'space-between',
            paddingHorizontal: '5%',
          }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image
              source={require('../../assets/member-card.png')}
              style={{ width: 25, height: 25 }}></Image>
            <Text
              style={{
                fontSize: 15,
                color: '#16247d',
                alignItems: 'center',
                paddingLeft: '5%',
              }}>
              JOIN MEMBERSHIP
            </Text>
          </View>
          <AntDesign name="right" size={22} color={'#16247d'} style={{}} />
        </TouchableOpacity>
        <View
          style={{
            borderBottomWidth: 0.3,
            marginTop: 10,
          }}></View>
        <Text
          style={{
            fontWeight: 'bold',
            marginTop: 10,
            marginLeft: 20,
            fontSize: 16,
            color: 'black',
          }}>
          Our Professional
        </Text>
        <View style={{ flexDirection: 'row', marginTop: 10 }}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <TouchableOpacity>
              <ProfessorCard image={require('../../assets/user.png')} namePro={"Professor Jordan"}
                rate={"⭐⭐⭐⭐⭐"} navigation={() => navigation.navigate("ProfessionalDetial")} />
            </TouchableOpacity>
            <ProfessorCard image={require('../../assets/user2.png')} namePro={"Professor Boroeurn"}
              rate={"⭐⭐⭐⭐⭐"} navigation={() => navigation.navigate("ProfessionalDetial")} />
            <ProfessorCard image={require('../../assets/user3.png')} namePro={"Ms. Nita"}
              rate={"⭐⭐⭐⭐⭐"} navigation={() => navigation.push("LoginScreen")} />
            <ProfessorCard image={require('../../assets/user.png')} namePro={"Professor Jordan"}
              rate={"⭐⭐⭐⭐⭐"} navigation={() => navigation.navigate("ProfessionalDetial")} />
          </ScrollView>
        </View>
        <View
          style={{
            borderBottomWidth: 0.3,
            marginTop: 10,
          }}></View>
        <Text
          style={{
            fontWeight: 'bold',
            marginTop: 10,
            marginLeft: 20,
            fontSize: 16,
            color: 'black',
          }}>
          Mobile Services
        </Text>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 10,
          }}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <MobileServiceCard image={require('../../assets/nail-polish.png')}
              price={'10.00$'} title={'Nails'} navigation={() => navigation.navigate("OrderScreen")} />
            <MobileServiceCard image={require('../../assets/cut.png')} price={'10.00$'}
              title={'Haircut'} navigation={() => navigation.navigate("OrderScreen")} />
            <MobileServiceCard image={require('../../assets/makeup.png')} price={'200.00$'}
              title={'Wedding Makeup'} navigation={() => navigation.navigate("OrderScreen")} />
            <MobileServiceCard image={require('../../assets/haircut-for-kid.png')} price={'10.00$'}
              title={'Haircut for Kids'} navigation={() => navigation.navigate("OrderScreen")} />
          </ScrollView>
        </View>
        <Text
          style={{
            fontWeight: 'bold',
            marginTop: 10,
            marginLeft: 20,
            fontSize: 16,
            color: 'black',
          }}>
          Member Types
        </Text>
        <View style={styles.formMember}>
          <View style={{ flexDirection: 'row' }}>
            <Ionicons
              name="ribbon-outline"
              size={20}
              color={'black'}
              style={{}}
            />
            <Text
              style={{
                fontSize: 15,
                color: 'black',
                marginLeft: 10,
              }}>
              Silver
            </Text>
          </View>
          <Text style={{ fontSize: 15, color: '#16247d' }}>
            200 pts (Dis. 10%)
          </Text>
        </View>
        <View style={styles.formMember}>
          <View style={{ flexDirection: 'row' }}>
            <Ionicons
              name="ribbon-outline"
              size={20}
              color={'black'}
              style={{}}
            />
            <Text
              style={{
                fontSize: 15,
                color: 'black',
                marginLeft: 10,
              }}>
              Gold
            </Text>
          </View>
          <Text style={{ fontSize: 15, color: '#16247d' }}>
            400 pts (Dis. 15%)
          </Text>
        </View>
        <View style={styles.formMember}>
          <View style={{ flexDirection: 'row' }}>
            <Ionicons
              name="ribbon-outline"
              size={20}
              color={'black'}
              style={{}}
            />
            <Text
              style={{
                fontSize: 15,
                color: 'black',
                marginLeft: 10,
              }}>
              Platinum
            </Text>
          </View>
          <Text style={{ fontSize: 15, color: '#16247d' }}>
            600 pts (Dis. 20%)
          </Text>
        </View>
        <View style={{ borderBottomWidth: 1, marginTop: 60 }}></View>
      </ScrollView>
      <View
        style={{
          width: '100%',
          height: 60,
          bottom: 0,
          flexDirection: 'row',
          backgroundColor: 'white',
          position: 'absolute',
          alignItems: 'center',
          borderTopWidth: 0.5,
          borderBlockColor: 'grey',
          justifyContent: 'space-between',
          paddingHorizontal: '5%',
        }}>
        <View style={{ flexDirection: 'row', width: '40%' }}>
          <Image
            source={require('../../assets/gmail.png')}
            style={{ width: 30, height: 30 }}></Image>
          <Image
            source={require('../../assets/telephone.png')}
            style={{ marginLeft: 20, width: 30, height: 30 }}></Image>
        </View>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {

          }}
          style={{
            backgroundColor: '#16247d',
            paddingHorizontal: 25,
            paddingVertical: 8,
            borderRadius: 6,
            width: '55%',
          }}>
          <Text
            style={{
              color: 'white',
              fontWeight: 'bold',
              fontSize: 13,
              alignSelf: 'center',
            }}>
            Make a BOOKING
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ShopInformation;

const styles = StyleSheet.create({
  form: {
    flexDirection: 'row',
    height: 50,
    width: '90%',
    marginTop: 10,
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: 'white',
  },
  formMember: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    height: 40,
    width: '90%',
    marginTop: 5,
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: 'white',
    paddingHorizontal: '3%',

  },
});
