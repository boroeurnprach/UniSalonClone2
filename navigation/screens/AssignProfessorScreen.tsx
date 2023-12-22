import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import ProfessorCard from '../../compoment/ProfessorCard';
import Entypo from 'react-native-vector-icons/Entypo'
import ChooseProfessor from '../../compoment/ChooseProfessor';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

const fontTitle = 14;

const AssignProfessorScreen = ({ navigation, }) => {
    return (
        <SafeAreaView style={{}}>
            <View
                style={{
                    width: '100%',
                    height: 60,
                    backgroundColor: '#134286',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                <AntDesign
                    onPress={() => {
                        navigation.navigate('MakeABooking');
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
                    Assign Professors (Optional)
                </Text>
            </View>
            <View style={{ marginHorizontal: 10, }}>
                <View style={{ flexDirection: 'row', justifyContent: 'center', marginVertical: 1 }}>
                    <ChooseProfessor namePro={'Boroeurn Prach'} image={require('../../assets/boroeurn.jpg')} />
                    <ChooseProfessor namePro={'Vireak'} image={require('../../assets/user.png')} />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', marginVertical: 1 }}>
                    <ChooseProfessor namePro={'Lina'} image={require('../../assets/user4.png')} />
                    <ChooseProfessor namePro={'Reaksa'} image={require('../../assets/user3.png')} />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', marginVertical: 1 }}>
                    <ChooseProfessor namePro={'Youlong'} image={require('../../assets/user2.png')} />
                    <ChooseProfessor namePro={'Diya'} image={require('../../assets/user.png')} />
                </View>
                <TouchableOpacity onPress={() => {
                    navigation.navigate('ChooseServiceScreen');
                }}>
                    <View style={{ width: '100%', height: 50, backgroundColor: '#134286', justifyContent: 'center', marginTop: 50, borderRadius: 5 }}>
                        <Text style={{ color: 'white', textAlign: 'center' }}>Skip</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default AssignProfessorScreen

const styles = StyleSheet.create({})