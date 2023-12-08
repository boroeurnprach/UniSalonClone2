import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';

const ForgotPassword = () => {
    return (
        <View>
            <View style={{ backgroundColor: '#fff', height: 80, justifyContent: 'center', paddingTop: 20, }}>
                <View style={{
                    position: 'absolute',
                    left: 10,
                    paddingTop: 20,
                }}>
                    <MaterialIcons name="arrow-back" size={30} color="black" />
                </View>
            </View>
            <View style={{ alignItems: 'center', }}>
                <Text>
                    Forgot Password
                </Text>
                <Text>
                    Enter your credential
                </Text>
            </View>
            <View style={{justifyContent: 'center', margin: 20}}>
                <View style={{ backgroundColor: 'grey', flexDirection: 'row', alignItems: 'center',  marginBottom: 10, height: 50, borderRadius: 10, justifyContent: 'space-between' }}>
                    <View style={{flexDirection: 'row', alignItems: 'center', paddingLeft: 10}}>
                    <Text style={{ color: 'blue' }}>+855 | </Text>
                    <TextInput
                        style={{ color: 'blue' }}
                        placeholder="Enter your number"
                        placeholderTextColor="#003f5c"

                    />
                    </View>
                    <View style={{width: 80, height: 50, backgroundColor:'blue', justifyContent:'center', alignItems: 'center'}}>
                        <Text>
                            Send
                        </Text>
                    </View>
                </View>
                <View style={{ backgroundColor: 'grey', justifyContent: 'center',  marginBottom: 10, height: 50, borderRadius: 10, paddingLeft: 10 }}>
        
                    <TextInput
                        style={{ color: 'blue' }}
                        placeholder="Code"
                        placeholderTextColor="#003f5c"

                    />
                </View>
            </View>
            <View>
                <Text>

                </Text>
            </View>
        </View>

    )
}

export default ForgotPassword

const styles = StyleSheet.create({})
