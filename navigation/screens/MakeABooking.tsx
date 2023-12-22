import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Platform } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';

const MakeABooking = ({ navigation }) => {
    const fontTitle = 14;
    const [date, setDate] = useState(new Date());
    const [time, setTime] = useState(new Date());

    const onChangeDate = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setDate(currentDate);
    };

    const onChangeTime = (event, selectedTime) => {
        const currentTime = selectedTime || time;
        setTime(currentTime);
    };

    const showMode = (currentMode) => {
        DateTimePickerAndroid.open({
            value: currentMode === 'date' ? date : time,
            onChange: currentMode === 'date' ? onChangeDate : onChangeTime,
            mode: currentMode,
            is24Hour: true,
        });
    };

    const showDatepicker = () => {
        showMode('date');
    };

    const showTimepicker = () => {
        showMode('time');
    };

    return (
        <SafeAreaView>
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
                        navigation.navigate('MainTabs');
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
                    MAKE A BOOKING
                </Text>
            </View>

            {/* content */}
            <View style={{ marginHorizontal: 10 }}>
                <Text style={{ fontWeight: 'bold', marginVertical: 10 }}>Shop Information</Text>

                <View style={{ marginVertical: 10, width: '100%', height: 50, backgroundColor: 'white', borderRadius: 10, flexDirection: 'row', alignItems: 'center' }}>
                    <MaterialCommunityIcons name='office-building-outline' size={20} style={{ marginHorizontal: 10, color: 'lightgrey' }} />
                    <View style={{ width: 1, height: 40, backgroundColor: 'lightgrey' }}></View>
                    <Text style={{ marginLeft: 20, color: 'lightgrey' }}>មែន ស្ដាយ</Text>
                </View>

                <View style={{ marginVertical: 10, width: '100%', height: 50, backgroundColor: 'white', borderRadius: 10, flexDirection: 'row', alignItems: 'center' }}>
                    <Ionicons name='phone-portrait-outline' size={20} style={{ marginHorizontal: 10, color: 'lightgrey' }} />
                    <View style={{ width: 1, height: 40, backgroundColor: 'lightgrey' }}></View>
                    <Text style={{ marginLeft: 20, color: 'lightgrey' }}>០១១ ៩១២ ៣៤៣</Text>
                </View>

                <View style={{ marginVertical: 10, width: '100%', height: 50, backgroundColor: 'white', borderRadius: 10, flexDirection: 'row', alignItems: 'center' }}>
                    <Ionicons name='location-outline' size={20} style={{ marginHorizontal: 10, color: 'lightgrey' }} />
                    <View style={{ width: 1, height: 40, backgroundColor: 'lightgrey' }}></View>
                    <Text style={{ marginLeft: 20, color: 'lightgrey' }}>102 St 432, Phnom Penh, Cambodia</Text>
                </View>

                <Text style={{ fontWeight: 'bold', marginVertical: 10 }}>Booking Information</Text>

                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ marginVertical: 10, width: '49%', marginRight: 3, height: 50, backgroundColor: 'white', borderRadius: 10, flexDirection: 'row', alignItems: 'center' }}>
                        <TouchableOpacity onPress={showDatepicker}>
                            <MaterialCommunityIcons name='clock-time-nine-outline' size={20} style={{ marginHorizontal: 10, color: 'lightgrey' }} />
                        </TouchableOpacity>
                        <View style={{ width: 1, height: 40, backgroundColor: 'lightgrey' }}></View>
                        <Text style={{ marginLeft: 20 }}>{date.toLocaleDateString()}</Text>
                    </View>

                    <View style={{ marginVertical: 10, width: '49%', marginLeft: 3, height: 50, backgroundColor: 'white', borderRadius: 10, flexDirection: 'row', alignItems: 'center' }}>
                        <TouchableOpacity onPress={showTimepicker}>
                            <MaterialCommunityIcons name='clock-time-nine-outline' size={20} style={{ marginHorizontal: 10, color: 'lightgrey' }} />
                        </TouchableOpacity>
                        <View style={{ width: 1, height: 40, backgroundColor: 'lightgrey' }}></View>
                        <Text style={{ marginLeft: 20 }}>{time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</Text>
                    </View>
                </View>

                <View style={{ marginVertical: 10, width: '100%', height: 50, backgroundColor: 'white', borderRadius: 10, flexDirection: 'row', alignItems: 'center' }}>
                    <Feather name='alert-circle' size={20} style={{ marginHorizontal: 10, color: 'lightgrey' }} />
                    <View style={{ width: 1, height: 40, backgroundColor: 'lightgrey' }}></View>
                    <TextInput placeholder='Booking Note... (Optional)' style={{ marginLeft: 20, color: 'lightgrey' }}></TextInput>
                </View>

               <TouchableOpacity onPress={()=> navigation.navigate("AssignProfessorScreen")}>
               <View style={{ borderRadius: 5, width: '100%', height: 50, backgroundColor: '#134286', justifyContent: 'center' }}>
                    <Text style={{ textAlign: 'center', color: 'white' }}>NEXT</Text>
                </View>
               </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default MakeABooking;
