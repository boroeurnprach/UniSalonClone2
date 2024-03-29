// ChooseServiceScreen.js
import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import ChooseSeviceCard from '../../compoment/ChooseSeviceCard';
import { SafeAreaView } from 'react-native-safe-area-context';


const fontTitle = 14;

const ChooseServiceScreen = ({ navigation }) => {
    const [isNextVisible, setIsNextVisible] = useState(false);

    const handleCardSelect = (isSelected) => {
        setIsNextVisible(isSelected);
    };

    const handleNextPress = () => {

    };

    return (
        <SafeAreaView style={{}}>
            <View style={{
                width: '100%',
                height: 60,
                backgroundColor: '#134286',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <AntDesign
                    onPress={() => {
                        navigation.navigate('AssignProfessorScreen');
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
                    Choose Services
                </Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View>
                    <Text style={{ marginVertical: 20, paddingLeft: 20 }}>Select Services</Text>
                    <View style={{ width: '100%', height: 1, backgroundColor: 'lightgrey', marginBottom: 5 }} />
                </View>
                {/* content */}
                <View style={{ alignItems: 'center', marginBottom: 100 }}>
                    <View style={{ flexDirection: 'row', marginBottom: 70 }}>
                        <ChooseSeviceCard onSelect={handleCardSelect} background={require('../../assets/salon.jpeg')} id={'001'} amount={'2'} cash={'2.00'} title={'កាត់សក់នារី'} />
                        <ChooseSeviceCard onSelect={handleCardSelect} background={require('../../assets/salon.jpeg')} id={'002'} amount={'1'} cash={'10.00'} title={'កាត់សក់បែបCEO'} />
                        <ChooseSeviceCard onSelect={handleCardSelect} background={require('../../assets/salon.jpeg')} id={'003'} amount={'4'} cash={'2.00'} title={'កោរពុកមាត់បុរស'} />
                    </View>
                    <View style={{ flexDirection: 'row', marginBottom: 70 }}>
                        <ChooseSeviceCard onSelect={handleCardSelect} background={require('../../assets/salon2.jpeg')} id={'004'} amount={'1'} cash={'5.00'} title={'កាត់សក់នារី'} />
                        <ChooseSeviceCard onSelect={handleCardSelect} background={require('../../assets/salon3.jpeg')} id={'005'} amount={'10'} cash={'2.00'} title={'កាត់សក់បែបCEO'} />
                        <ChooseSeviceCard onSelect={handleCardSelect} background={require('../../assets/salon4.jpeg')} id={'006'} amount={'1'} cash={'2.00'} title={'កោរពុកមាត់បុរស'} />
                    </View>
                    <View style={{ flexDirection: 'row', marginBottom: 70 }}>
                        <ChooseSeviceCard onSelect={handleCardSelect} background={require('../../assets/salon.jpeg')} id={'001'} amount={'1'} cash={'2.00'} title={'កាត់សក់នារី'} />
                        <ChooseSeviceCard onSelect={handleCardSelect} background={require('../../assets/salon.jpeg')} id={'002'} amount={'1'} cash={'2.00'} title={'កាត់សក់បែបCEO'} />
                        <ChooseSeviceCard onSelect={handleCardSelect} background={require('../../assets/salon.jpeg')} id={'003'} amount={'1'} cash={'2.00'} title={'កោរពុកមាត់បុរស'} />
                    </View>

                    {/* Add more rows of ChooseServiceCard as needed */}
                </View>
            </ScrollView>
            {isNextVisible && (
                <View style={{
                    width: '100%',
                    height: 90,

                    position: 'absolute',

                    bottom: 60,
                    alignSelf: 'center',
                    backgroundColor: 'white',
                    elevation: 20,
                }}>
                    <TouchableOpacity
                        onPress={handleNextPress}
                        style={{
                            width: '90%',
                            height: 50,
                            backgroundColor: '#134286',
                            alignSelf: 'center',

                            borderRadius: 10,
                            justifyContent: 'center',
                            marginTop: 10
                        }}>
                        <Text style={{ color: 'white', textAlign: 'center' }}>Next</Text>
                    </TouchableOpacity>
                </View>
            )}
        </SafeAreaView>
    );
};

export default ChooseServiceScreen;

const styles = StyleSheet.create({});