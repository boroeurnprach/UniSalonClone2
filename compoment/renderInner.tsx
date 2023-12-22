import { StyleSheet, Text, View, ScrollView, TouchableOpacity, FlatList, Image } from 'react-native'
import React from 'react'
import CategoryItem from './CategoryItem'
import PopularSalon from './PopularSalon'
import FontAwesome6 from 'react-native-vector-icons/FontAwesome5'
import Entypo from 'react-native-vector-icons/Entypo'
import NewSalon from './NewSalon'
const PopularSalonsData = [
  {
    id: '1',
    name: 'មែន ស្តាយ',
    customer: '27 ',
    description:
      'បម្រើសេវាកម្មជូនអស់លោក លោកស្រីអោយកាន់តែមានប្រសិទ្ធភាព គុណភាព...',
    img: require('../assets/man.png'),

  },
  {
    id: '2',
    name: '007 haircut',
    customer: '1 ',
    description:
      'បម្រើសេវាកម្មជូនអស់លោក លោកស្រីអោយកាន់តែមានប្រសិទ្ធភាព គុណភាព...',
    img: require('../assets/man.png'),

  },
  {
    id: '3',
    name: 'មែន ស្តាយ',
    customer: '27 ',
    description:
      'បម្រើសេវាកម្មជូនអស់លោក លោកស្រីអោយកាន់តែមានប្រសិទ្ធភាព គុណភាព...',
    img: require('../assets/man.png'),

  },
  {
    id: '4',
    name: '007 haircut',
    customer: '1',
    description:
      'បម្រើសេវាកម្មជូនអស់លោក លោកស្រីអោយកាន់តែមានប្រសិទ្ធភាព គុណភាព...',
    img: require('../assets/man.png'),
  },
  {
    id: '5',
    name: '007 haircut',
    customer: '1',
    description:
      'បម្រើសេវាកម្មជូនអស់លោក លោកស្រីអោយកាន់តែមានប្រសិទ្ធភាព គុណភាព...',
    img: require('../assets/man.png'),
  },
];

const renderInner = ({ navigation }) => {
  const fontTitle = 14;
  return (
    <View style={{ flex: 1, marginBottom: 70 }}>
      <View style={{ alignItems: 'center', }}>
        <Text style={{ color: '#134286', fontWeight: 'bold' }}>Explore</Text>
      </View>

      <View style={{ backgroundColor: '#faf8f6', marginHorizontal: 10, borderRadius: 10, marginVertical: 5, paddingVertical: 20 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'center', }}>
          <CategoryItem image={require('../assets/cream.png')} text={'Bleaching'} bgColor={'#f3e3ff'} />
          <CategoryItem image={require('../assets/hair-dryer.png')} text={'Blow Dry'} bgColor={'#ff654a'} />
          <CategoryItem image={require('../assets/paint.png')} text={'Cocktail Party Ma...'} bgColor={'#41d63c'} />
          <CategoryItem image={require('../assets/scissor.png')} text={'Edge Up'} bgColor={'#8221d1'} />
          <CategoryItem image={require('../assets/eyebrow.png')} text={'Eyebrow'} bgColor={'#422fd4'} />
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'center', marginVertical: 20, marginTop: 30 }}>
          <CategoryItem image={require('../assets/eyebrow.png')} text={'Eyebrow Wax with..'} bgColor={'#37bfaf'} />
          <CategoryItem image={require('../assets/wash-face.png')} text={'Face message'} bgColor={'#5efcf4'} />
          <CategoryItem image={require('../assets/nail-polish.png')} text={'French tip'} bgColor={'#52d6cd'} />
          <CategoryItem image={require('../assets/paint.png')} text={'GEL Colo'} bgColor={'#46b3aa'} />
          <CategoryItem image={require('../assets/dots-menu.png')} text={'More'} bgColor={'#360da8'} />

        </View>
      </View>

      <Text style={{ color: '#134286', fontWeight: 'bold', marginVertical: 10, fontSize: fontTitle, marginLeft: 10, }}>Popular Salon</Text>




      <View style={{ flexDirection: 'row', width: 'auto', height: 200, }}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <PopularSalon description={'បម្រើសេវាកម្មជូនអស់លោក លោកស្រីឲ្យកាន់តែមានប្រសិទ្ធិភាព គុណភាព ទំនុក...'} image={require('../assets/salon.jpeg')} location={'Svay Rieng'} nameShop={'មែន ស្ដាយ'} rate={'⭐️⭐️⭐️⭐️⭐️ (7)'} userCount={'10'} navigation={() => navigation.navigate("MakeABooking")} />
          <PopularSalon description={'បម្រើសេវាកម្មជូនអស់លោក លោកស្រីឲ្យកាន់តែមានប្រសិទ្ធិភាព គុណភាព ទំនុក...'} image={require('../assets/salon.jpeg')} location={'Svay Rieng'} nameShop={'មែន ស្ដាយ'} rate={'⭐️⭐️⭐️⭐️⭐️ (7)'} userCount={'10'} navigation={() => navigation.navigate("MakeABooking")} />
          <PopularSalon description={'បម្រើសេវាកម្មជូនអស់លោក លោកស្រីឲ្យកាន់តែមានប្រសិទ្ធិភាព គុណភាព ទំនុក...'} image={require('../assets/salon.jpeg')} location={'Svay Rieng'} nameShop={'មែន ស្ដាយ'} rate={'⭐️⭐️⭐️⭐️⭐️ (7)'} userCount={'10'} navigation={() => navigation.navigate("MakeABooking")} />
          <PopularSalon description={'បម្រើសេវាកម្មជូនអស់លោក លោកស្រីឲ្យកាន់តែមានប្រសិទ្ធិភាព គុណភាព ទំនុក...'} image={require('../assets/salon.jpeg')} location={'Svay Rieng'} nameShop={'មែន ស្ដាយ'} rate={'⭐️⭐️⭐️⭐️⭐️ (7)'} userCount={'10'} navigation={() => navigation.navigate("MakeABooking")} />
        </ScrollView>
      </View>
      <Text style={{ color: '#134286', fontWeight: 'bold', marginVertical: 10, fontSize: fontTitle, marginLeft: 10, }}>Special Promotions</Text>
      <View style={{ width: 120, height: 180, marginLeft: 10, borderRadius: 20 }}>
        <Image source={require('../assets/salon6.jpeg')} style={{ width: 120, height: 180, borderRadius: 10 }} />
      </View>
      <Text style={{ color: '#134286', fontWeight: 'bold', marginBottom: 10, fontSize: fontTitle, marginLeft: 10, }}>Top Rating Salons</Text>
      <View style={{ flexDirection: 'row', width: 'auto', height: 200 }}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <PopularSalon description={'បម្រើសេវាកម្មជូនអស់លោក លោកស្រីឲ្យកាន់តែមានប្រសិទ្ធិភាព គុណភាព ទំនុក...'} image={require('../assets/salon.jpeg')} location={'Svay Rieng'} nameShop={'មែន ស្ដាយ'} rate={'⭐️⭐️⭐️⭐️⭐️ (7)'} userCount={'10'} navigation={() => navigation.navigate("MakeABooking")} />
          <PopularSalon description={'បម្រើសេវាកម្មជូនអស់លោក លោកស្រីឲ្យកាន់តែមានប្រសិទ្ធិភាព គុណភាព ទំនុក...'} image={require('../assets/salon.jpeg')} location={'Svay Rieng'} nameShop={'មែន ស្ដាយ'} rate={'⭐️⭐️⭐️⭐️⭐️ (7)'} userCount={'10'} navigation={() => navigation.navigate("MakeABooking")} />
          <PopularSalon description={'បម្រើសេវាកម្មជូនអស់លោក លោកស្រីឲ្យកាន់តែមានប្រសិទ្ធិភាព គុណភាព ទំនុក...'} image={require('../assets/salon.jpeg')} location={'Svay Rieng'} nameShop={'មែន ស្ដាយ'} rate={'⭐️⭐️⭐️⭐️⭐️ (7)'} userCount={'10'} navigation={() => navigation.navigate("MakeABooking")} />
          <PopularSalon description={'បម្រើសេវាកម្មជូនអស់លោក លោកស្រីឲ្យកាន់តែមានប្រសិទ្ធិភាព គុណភាព ទំនុក...'} image={require('../assets/salon.jpeg')} location={'Svay Rieng'} nameShop={'មែន ស្ដាយ'} rate={'⭐️⭐️⭐️⭐️⭐️ (7)'} userCount={'10'} navigation={() => navigation.navigate("MakeABooking")} />

        </ScrollView>



      </View>
      <Text style={{ color: '#134286', fontWeight: 'bold', marginBottom: 10, fontSize: fontTitle, marginLeft: 10, }}>Top Rating Professor</Text>

      <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'center', marginVertical: 5 }}>
        <View style={{ width: '45%', height: 180, elevation: 1, marginHorizontal: 3, borderRadius: 10, backgroundColor: '#faf8f6', justifyContent: 'center', alignItems: 'center' }}>
          <Image source={require('../assets/boroeurn.jpg')} style={{ width: 50, height: 50, borderRadius: 100 }} />
          <Text style={{ fontSize: 10, color: '#134286', fontWeight: 'bold', }}>Boroeurn Prach</Text>
          <Text style={{ fontSize: 10 }}>⭐️⭐️⭐️⭐️⭐️ (3)</Text>
          <Text style={{ fontSize: 10 }}>0 Credit /0 Review</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Entypo name="location-pin" size={13} color='blue' />
            <Text style={{ fontSize: 10, color: '#134286', fontWeight: 'bold', }}>None</Text>
          </View>
        </View>
        <View style={{ width: '45%', height: 180, elevation: 1, marginHorizontal: 3, borderRadius: 10, backgroundColor: '#faf8f6', justifyContent: 'center', alignItems: 'center' }}>
          <Image source={require('../assets/man.png')} style={{ width: 50, height: 50, borderRadius: 100 }} />
          <Text style={{ fontSize: 10, color: '#134286', fontWeight: 'bold', }}>Savann Mean</Text>
          <Text style={{ fontSize: 10 }}>⭐️⭐️⭐️⭐️⭐️ (3)</Text>
          <Text style={{ fontSize: 10 }}>0 Credit /0 Review</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Entypo name="location-pin" size={13} color='blue' />
            <Text style={{ fontSize: 10, color: '#134286', fontWeight: 'bold', }}>None</Text>
          </View>
        </View>


      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'center', marginVertical: 5 }}>
        <View style={{ width: '45%', height: 180, elevation: 1, marginHorizontal: 3, borderRadius: 10, backgroundColor: '#faf8f6', justifyContent: 'center', alignItems: 'center' }}>
          <Image source={require('../assets/user.png')} style={{ width: 50, height: 50, borderRadius: 100 }} />
          <Text style={{ fontSize: 10, color: '#134286', fontWeight: 'bold', }}>Boroeurn Prach</Text>
          <Text style={{ fontSize: 10 }}>⭐️⭐️⭐️⭐️⭐️ (3)</Text>
          <Text style={{ fontSize: 10 }}>0 Credit /0 Review</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Entypo name="location-pin" size={13} color='blue' />
            <Text style={{ fontSize: 10, color: '#134286', fontWeight: 'bold', }}>None</Text>
          </View>
        </View>

        <View style={{ width: '45%', height: 180, elevation: 1, marginHorizontal: 3, borderRadius: 10, backgroundColor: '#faf8f6', justifyContent: 'center', alignItems: 'center' }}>
          <Image source={require('../assets/user3.png')} style={{ width: 50, height: 50, borderRadius: 100 }} />
          <Text style={{ fontSize: 10, color: '#134286', fontWeight: 'bold', }}>Reaksa Rot</Text>
          <Text style={{ fontSize: 10 }}>⭐️⭐️⭐️⭐️⭐️ (3)</Text>
          <Text style={{ fontSize: 10 }}>0 Credit /0 Review</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Entypo name="location-pin" size={13} color='blue' />
            <Text style={{ fontSize: 10, color: '#134286', fontWeight: 'bold', }}>None</Text>
          </View>
        </View>
      </View>
      <Text style={{ color: '#134286', fontWeight: 'bold', marginBottom: 10, fontSize: fontTitle, marginLeft: 10, }}>New Salons</Text>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <NewSalon image={require('../assets/salon8.jpg')} nameShop={'Teng Barber'} rate={'⭐️⭐️⭐️⭐️⭐️ (1)'} />
          <NewSalon image={require('../assets/salon7.jpeg')} nameShop={'Vicci Beauty Bar'} rate={'⭐️⭐️⭐️⭐️⭐️ (1)'} />
          <NewSalon image={require('../assets/salon8.jpg')} nameShop={'Justin Barber'} rate={'⭐️⭐️⭐️⭐️⭐️ (1)'} />

        </ScrollView>
      </View>
    </View>

  )
}

export default renderInner

const styles = StyleSheet.create({})