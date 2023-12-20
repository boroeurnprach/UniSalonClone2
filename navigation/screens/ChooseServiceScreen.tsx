// ChooseServiceScreen.js
import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import ChooseSeviceCard from '../../compoment/ChooseSeviceCard';


const fontTitle = 14;

const ChooseServiceScreen = ({ navigation }) => {
    const [isNextVisible, setIsNextVisible] = useState(false);

    const handleCardSelect = (isSelected) => {
        setIsNextVisible(isSelected);
    };

    const handleNextPress = () => {
        // Handle the logic for navigating to the next screen or any other action
        // For example, you can use navigation.navigate('NextScreen');
    };

    return (
        <View style={{ flex: 1 }}>
            <View style={{
                width: '100%',
                height: 60,
                backgroundColor: '#16247d',
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
                        <ChooseSeviceCard onSelect={handleCardSelect} />
                        <ChooseSeviceCard onSelect={handleCardSelect} />
                        <ChooseSeviceCard onSelect={handleCardSelect} />
                    </View>
                    <View style={{ flexDirection: 'row', marginBottom: 70 }}>
                        <ChooseSeviceCard onSelect={handleCardSelect} />
                        <ChooseSeviceCard onSelect={handleCardSelect} />
                        <ChooseSeviceCard onSelect={handleCardSelect} />
                    </View>
                    <View style={{ flexDirection: 'row', marginBottom: 70 }}>
                        <ChooseSeviceCard onSelect={handleCardSelect} />
                        <ChooseSeviceCard onSelect={handleCardSelect} />
                        <ChooseSeviceCard onSelect={handleCardSelect} />
                    </View>
                    <View style={{ flexDirection: 'row', marginBottom: 70 }}>
                        <ChooseSeviceCard onSelect={handleCardSelect} />
                        <ChooseSeviceCard onSelect={handleCardSelect} />
                        <ChooseSeviceCard onSelect={handleCardSelect} />
                    </View>
                    <View style={{ flexDirection: 'row', marginBottom: 70 }}>
                        <ChooseSeviceCard onSelect={handleCardSelect} />
                        <ChooseSeviceCard onSelect={handleCardSelect} />
                        <ChooseSeviceCard onSelect={handleCardSelect} />
                    </View>
                    {/* Add more rows of ChooseServiceCard as needed */}
                </View>
            </ScrollView>
            {isNextVisible && (
                <View style={{
                    width: '100%',
                    height: 90,

                    position: 'absolute',
                   
                    bottom: 0,
                    alignSelf: 'center',
                    backgroundColor: 'white'
                }}>
                    <TouchableOpacity
                        onPress={handleNextPress}
                        style={{
                            width: '90%',
                            height: 50,
                            backgroundColor: '#16247d',
                            alignSelf: 'center',

                            borderRadius: 10,
                            justifyContent: 'center',
                        }}>
                        <Text style={{ color: 'white', textAlign: 'center' }}>Next</Text>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    );
};

export default ChooseServiceScreen;

const styles = StyleSheet.create({});
