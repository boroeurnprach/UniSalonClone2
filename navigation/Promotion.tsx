import * as React from 'react';
import { View, Text, Dimensions } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

export default function Promotion() {
    const navigation: any = useNavigation();
    return (
        <View>
            <View
                style={{
                    width: '100%',
                    height: 60,
                    backgroundColor: '#16247d',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',


                }}>
                <Feather
                    onPress={() => {
                        navigation.openDrawer();
                    }}
                    name="menu"
                    size={24}
                    style={{
                        position: 'absolute',
                        left: 10,

                        color: 'white',
                    }}
                />
                <View style={{ width: Dimensions.get('window').width }}>
                    <Text
                        style={{
                            textAlign: 'center', color: 'white', fontSize: 20,
                        }}>
                        Promotions
                    </Text>
                </View>

            </View>

        </View>
    );
}