// ChooseServiceCard.js
import React, { useState } from 'react';
import { View, ImageBackground, Text, Pressable, Image } from 'react-native';

const ChooseSeviceCard = ({ onSelect }) => {
    const [isPressed, setIsPressed] = useState(false);

    const handlePress = () => {
        setIsPressed(!isPressed);
        onSelect(!isPressed); // Notify the parent about the selection state
    };

    return (
        <View>
            <View style={{ width: 100, height: 130, marginHorizontal: 5 }}>
                <Pressable onPress={handlePress}>
                    <ImageBackground source={require('../assets/lambo_car.jpg')} style={{ width: 100, height: 130 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <View style={{ width: '55%', height: 25, backgroundColor: '#94ddeb', borderBottomEndRadius: 5, justifyContent: 'center' }}>
                                <Text style={{ color: 'white', fontSize: 12 }}>$3.00 up</Text>
                            </View>
                            <View style={{
                                height: 20,
                                width: 20,
                                borderRadius: 50,
                                borderWidth: 2,
                                borderColor: 'white',
                                marginEnd: 5,
                                justifyContent: 'center', alignItems: 'center'
                            }}>
                                {isPressed && (
                                    <Image source={require('../assets/checkmark.png')} style={{ width: 20, height: 20, }} />
                                )}
                            </View>
                        </View>
                        <View style={{ width: '30%', height: 20, backgroundColor: '#94ddeb', borderBottomEndRadius: 5, marginVertical: 5 }}>
                            <Text style={{ color: 'white', fontSize: 12 }}>1 pt</Text>
                        </View>
                    </ImageBackground>
                </Pressable>
                <Text style={{ color: '#19267d' }}>003</Text>
                <Text style={{ color: '#19267d', fontWeight: 'bold', fontSize: 16 }}>កាតសក់នារី</Text>
            </View>
        </View>
    );
};

export default ChooseSeviceCard;
