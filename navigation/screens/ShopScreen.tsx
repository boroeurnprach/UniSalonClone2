import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import Feature from 'react-native-vector-icons/Feather';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import Card from '../../Card';
import Card2 from '../../Card2';
import Card3 from '../../Card3';

const fontTitle = 14;
const ShopScreen = ({ navigation }) => {
  return (
    <View>
      <View style={styles.container}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {
            navigation.openDrawer()
          }}
          style={styles.icon}>
          <Feature
            name="menu"
            size={20}
            style={{
              color: 'white',
            }}
          />
        </TouchableOpacity>
        <Text style={styles.textShop}>Shops</Text>
      </View>
      <View style={{ marginHorizontal: 5, marginTop: 10 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', borderColor: 'lightgrey', borderWidth: 1, width: '100%', height: 50, borderRadius: 5 }}>
          <MaterialIcon name="search" size={25} color='grey' style={{ paddingLeft: 10 }} />
          <TextInput placeholder="Salon search..." />
        </View>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'center', marginHorizontal: 5, marginVertical: 10 }}>
        <View style={{ flex: 1, height: 1, backgroundColor: 'grey' }} />
      </View>
      {/* Recommend text */}
      <View style={{ marginHorizontal: 10, marginBottom: 350 }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View><Text style={{ color: '#134286', fontWeight: 'bold', marginVertical: 5, fontSize: fontTitle }}>Recommend Salons</Text></View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>


              <Card imageSource={require('../../assets/barber1.jpeg')} location="None" customerCount={27} userName="មែន ស្ដាយ" />
              <Card imageSource={require('../../assets/barber2.jpeg')} location="Phnom Penh" customerCount={90} userName="បូរឿន" />
              <Card imageSource={require('../../assets/barber3.jpeg')} location="Banan" customerCount={27} userName="មុីៗ កាត់សក់" />
              <Card imageSource={require('../../assets/bird.jpeg')} location="None" customerCount={27} userName="មែន ស្ដាយ" />
              <Card imageSource={require('../../assets/lambo_car.jpg')} location="None" customerCount={27} userName=" barbershop" />
              <Card imageSource={require('../../assets/lambo_car.jpg')} location="None" customerCount={27} userName="មែន ស្ដាយ" />
              <Card imageSource={require('../../assets/lambo_car.jpg')} location="None" customerCount={27} userName="មែន ស្ដាយ" />
            </View>
          </ScrollView>
          {/* More Salon */}
          <Text style={{ color: '#144389', fontWeight: 'bold', marginVertical: 5, fontSize: fontTitle }}>More Salons</Text>

          <Card2 shopName="ស្រស់ស្អាត" description="បម្រើសេវាកម្មជូនអស់លោក លោកស្រីឲ្យកាន់តែមានប្រសិទ្ធិភាព គុណភាព..." imageSource={require('../../assets/barber2.jpeg')} location="Svay Rieng" rate="⭐⭐⭐⭐⭐(4)" status="Opening" />
          <Card2 shopName="មែន ស្ដាយ" description="បម្រើសេវាកម្មជូនអស់លោក លោកស្រីឲ្យកាន់តែមានប្រសិទ្ធិភាព គុណភាព..." imageSource={require('../../assets/barber3.jpeg')} location="Banan" rate="⭐⭐⭐⭐⭐(4)" status="Opening" />
          <Card2 shopName="Man Barber" description="បម្រើសេវាកម្មជូនអស់លោក លោកស្រីឲ្យកាន់តែមានប្រសិទ្ធិភាព គុណភាព..." imageSource={require('../../assets/barber-logo.jpeg')} location="Takeo" rate="⭐⭐⭐⭐⭐(4)" status="Opening" />
          <Card2 shopName="Mr. Boroeurn" description="បម្រើសេវាកម្មជូនអស់លោក លោកស្រីឲ្យកាន់តែមានប្រសិទ្ធិភាព គុណភាព..." imageSource={require('../../assets/barber-kid.jpeg')} location="Banan" rate="⭐⭐⭐⭐⭐(4)" status="Closing" />
          <Card2 shopName="Mr. Mean" description="បម្រើសេវាកម្មជូនអស់លោក លោកស្រីឲ្យកាន់តែមានប្រសិទ្ធិភាព គុណភាព..." imageSource={require('../../assets/salon6.jpeg')} location="Banan" rate="⭐⭐⭐⭐⭐(8)" status="Opening" />
          <Card2 shopName="Mr. Mean" description="បម្រើសេវាកម្មជូនអស់លោក លោកស្រីឲ្យកាន់តែមានប្រសិទ្ធិភាព គុណភាព..." imageSource={require('../../assets/salon9.png')} location="Banan" rate="⭐⭐⭐⭐⭐(4)" status="Opening" />
          <Card2 shopName="Mr. Diya" description="បម្រើសេវាកម្មជូនអស់លោក លោកស្រីឲ្យកាន់តែមានប្រសិទ្ធិភាព គុណភាព..." imageSource={require('../../assets/salon8.jpg')} location="Prey Veng" rate="⭐⭐⭐⭐⭐(4)" status="Opening" />
          <Card2 shopName="Mr. Youlong" description="បម្រើសេវាកម្មជូនអស់លោក លោកស្រីឲ្យកាន់តែមានប្រសិទ្ធិភាព គុណភាព..." imageSource={require('../../assets/barber.png')} location="Phnom Penh" rate="⭐⭐⭐⭐⭐(4)" status="Opening" />
          <Card2 shopName="Mr. Mean" description="បម្រើសេវាកម្មជូនអស់លោក លោកស្រីឲ្យកាន់តែមានប្រសិទ្ធិភាព គុណភាព..." imageSource={require('../../assets/barber2.jpeg')} location="Banan" rate="⭐⭐⭐⭐⭐(4)" status="Opening" />
          <Card2 shopName="Ms. Jessica" description="បម្រើសេវាកម្មជូនអស់លោក លោកស្រីឲ្យកាន់តែមានប្រសិទ្ធិភាព គុណភាព..." imageSource={require('../../assets/barber3.jpeg')} location="Banan" rate="⭐⭐⭐⭐⭐(4)" status="Close" />
        </ScrollView>
      </View>

    </View>
  );
};

export default ShopScreen;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 60,
    backgroundColor: '#134286',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    position: 'absolute',
    left: 10,
    justifyContent: 'center',
    alignItems: 'center',

  },
  textShop: {
    fontWeight: 'bold',
    fontSize: fontTitle,
    color: 'white',
    textAlign: 'center',
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
  inputText: {
    height: 50,
    color: 'black',

  },
  inputView: {
    justifyContent: 'center',
    flexDirection: 'row',
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 10,
    height: 50,
    marginBottom: 20,
    alignItems: 'center',
  },
  cardView: {
    alignSelf: 'center'
  }
});
