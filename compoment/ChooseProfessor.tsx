import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Entypo from 'react-native-vector-icons/Entypo'

const ChooseProfessor = ({ namePro, image }) => {
    const [isPressed, setIsPressed] = useState(false);

    const handlePress = () => {
        setIsPressed(!isPressed);
    };

    return (
        <TouchableOpacity onPress={handlePress}>
            <View>
                <View
                    style={{
                        width: 160,
                        height: 160,
                        backgroundColor: '#ffffff',
                        borderRadius: 5,
                        margin: 5,
                        elevation: 2,
                        
                    }}
                >


                    <View style={{ alignItems: 'flex-end' }}>
                        <View
                            style={{
                                height: 20,
                                width: 20,
                                borderRadius: 50,
                                borderWidth: 1,
                                borderColor: 'lightgrey',
                                backgroundColor: isPressed ? 'grey' : 'white',
                                margin: 5,

                            }}
                        ></View>
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }}>
                        <Image source={image} style={{ width: 60, height: 60, borderRadius: 100 }} />
                        <Text style={{ fontSize: 10, color: '#19267d', fontWeight: 'bold' }}>{namePro}</Text>
                        <Text style={{ fontSize: 10 }}>⭐️⭐️⭐️⭐️⭐️ (3)</Text>
                        <Text style={{ fontSize: 10 }}>O Credits/ 0 Reviews</Text>

                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default ChooseProfessor;

const styles = StyleSheet.create({});
