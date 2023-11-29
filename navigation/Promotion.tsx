import * as React from 'react';
import { View, StyleSheet, Dimensions, StatusBar, Text, Image } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';


const FirstRoute = () => (
    <View style={[styles.scene, { backgroundColor: '#fff' }]} >
        <View style={{ height: 160, backgroundColor: 'white', elevation: 2, flexDirection: 'row', alignItems: 'center' }}>
            <Image style={{ width: '40%', height: 155 }} source={require('../assets/haircut.jpg')}></Image>
            <View style={{ marginLeft: 10 }}>
                <Text>
                    កាត់សក់
                </Text>
                <Text>
                    មែន ស្ដាយ
                </Text>
                <Text>
                    ⭐⭐⭐⭐⭐(4)
                </Text>
                <Text>
                    កាត់សក់បុរស free កក់សោះជួន
                </Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Entypo name="location-pin" size={13} color='#144389' />
                            <Text style={{ fontSize: 10, color: '#144389' }}>none</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                            <MaterialCommunityIcons name="clock-time-five-outline" size={13} color='#144389' />
                            <Text style={{ fontSize: 10, color: '#144389' }}>Opening</Text>
                        </View>
                    </View>



                </View>

            </View>
        </View>
    </View>
);
const SecondRoute = () => (
    <View style={[styles.scene, { backgroundColor: '#fff' }]}>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Feather name="folder" size={45} color={'grey'}></Feather>
            <Text style={{ color: 'grey' }}>No Data</Text>
        </View>
    </View>


);

export default class Promotion extends React.Component {
    state = {
        index: 0,
        routes: [
            { key: 'first', title: 'Promotion' },
            { key: 'second', title: 'Rewards' },
        ],
    };

    render() {
        return (
            <TabView
                navigationState={this.state}
                renderScene={SceneMap({
                    first: FirstRoute,
                    second: SecondRoute,
                })}
                onIndexChange={index => this.setState({ index })}
                initialLayout={{ width: Dimensions.get('window').width }}
                style={styles.container}
            />


        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: StatusBar.currentHeight,
    },
    scene: {
        flex: 1,
    },
});