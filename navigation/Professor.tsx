import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Dimensions,
    FlatList,
    TouchableOpacity,
    Image,
} from 'react-native';
import React, { useState } from 'react';
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
const fontTitle = 14;
const iconSize = 20;
const { width, height } = Dimensions.get('window');
const SideBarFilter = [
    {
        id: 1,
        icon: require('../assets/menu.png'),
        title: 'All Professors',
    },
    {
        id: 2,
        icon: require('../assets/cream.png'),
        title: 'Bleaching',
    },
    {
        id: 3,
        icon: require('../assets/hair-dryer.png'),
        title: 'Blow Dry',
    },
    {
        id: 4,
        icon: require('../assets/makeup.png'),
        title: 'Cocktail Party MakeUp',
    },
    {
        id: 5,
        icon: require('../assets/woman-hair.png'),
        title: 'Edge Up',
    },
    {
        id: 6,
        icon: require('../assets/eyebrow.png'),
        title: 'Eyebrow Wax and Tint',
    },
    {
        id: 7,
        icon: require('../assets/woman-hair.png'),
        title: 'Frence Tip',
    },
    {
        id: 8,
        icon: require('../assets/hair.png'),
        title: 'GEL Color',
    },
    {
        id: 9,
        icon: require('../assets/woman-hair.png'),
        title: 'Face Hairstyle',
    },
    {
        id: 10,
        icon: require('../assets/makeup.png'),
        title: 'Salons',
    },
];

const PersonData = [
    {
        id: 1,
        name: 'Prach Boroeurn',
        img: require('../assets/boroeurn.jpg'),
    },
    {
        id: 2,
        name: 'Justin Bieber',
        img: require('../assets/justin.jpeg'),
    },
    {
        id: 3,
        name: 'Zayn',
        img: require('../assets/user2.png'),
    },
    {
        id: 4,
        name: 'Selena Gomez',
        img: require('../assets/user4.png'),
    },
    {
        id: 5,
        name: 'Rot Reaksa',
        img: require('../assets/human.png'),
    },
    {
        id: 6,
        name: 'Jack Ma',
        img: require('../assets/user.png'),
    },
    {
        id: 7,
        name: 'Anna',
        img: require('../assets/woman.png'),
    },
    {
        id: 8,
        name: 'William Evan',
        img: require('../assets/justin.jpeg'),
    },
    {
        id: 9,
        name: 'Sam',
        img: require('../assets/cat.jpg'),
    },
    {
        id: 10,
        name: 'Chris Evan',
        img: require('../assets/cat.jpg'),
    },
    {
        id: 11,
        name: 'Tom Cruise',
        img: require('../assets/cat.jpg'),
    },
    {
        id: 12,
        name: 'Tom Holland',
        img: require('../assets/cat.jpg'),
    },
];

const Professor = () => {
    const navigation: any = useNavigation();
    const [selectColor, setSelectColor] = useState<any>(0);
    const SelectItem = (item: any) => {
        console.log('Data: ', item);
        setSelectColor(item);
    };
    const [title, setTittle] = useState('');

    const SetTitle = (title: any) => {
        console.log('Tittle: ', title);
    };
    const ItemSelecter = (index: any) => {
        if (index === 0) {
            return 'white';
        }
    };
    const ChangeBackground = (index: any) => {
        if (index === 0) {
            return '#16247d';
        } else if (index === 1) {
            return 'yellow';
        }
    };
    const [id, setId] = useState(1);
    const CheckId = (id: any) => {
        setId(id);
    };
    const BodyRightBar = () => {
        if (id === 1) {
            console.log('title: ', title);
            return (
                <FlatList
                    style={{ marginRight: 3, marginBottom: height * 0.25 }}
                    numColumns={2}
                    showsVerticalScrollIndicator={false}
                    data={PersonData}
                    renderItem={({ item, index }) => {
                        return (
                            <TouchableOpacity
                                activeOpacity={0.8}

                            // onPress={() => {
                            //   navigation.push('ProfessorDetail', {
                            //     name: item.name,
                            //     img: item.img,
                            //   });
                            // }}
                            >
                                <View style={styles.Card}>
                                    <View style={styles.Profile}>
                                        <Image
                                            style={{
                                                flex: 1,
                                                height: 60,
                                                width: 60,
                                                borderRadius: 60 / 2,
                                            }}
                                            source={item.img}></Image>
                                    </View>
                                    <Text
                                        style={{
                                            alignSelf: 'center',
                                            fontSize: 12,
                                            fontWeight: 'bold',
                                            color: '#16247d',
                                            marginTop: 10,
                                        }}>
                                        {item.name}
                                    </Text>
                                    <Text
                                        style={{
                                            alignSelf: 'center',
                                            fontSize: 10,
                                            fontWeight: 'bold',
                                            color: 'grey',
                                            marginTop: 0,
                                        }}>
                                        ⭐️⭐️⭐️⭐️⭐️ (7)
                                    </Text>
                                    <View
                                        style={{
                                            flexDirection: 'row',
                                            justifyContent: 'center',
                                            marginTop: 5,
                                        }}>
                                        <Entypo
                                            size={16}
                                            color={'#16247d'}
                                            name="location-pin"
                                            style={{
                                                marginTop: 10,
                                            }}></Entypo>
                                        <Text
                                            style={{
                                                fontSize: 12,
                                                color: '#16247d',
                                                fontWeight: 'bold',
                                                marginTop: 10,
                                            }}>
                                            None
                                        </Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        );
                    }}></FlatList>
            );
        } else {
            return (
                <View
                    style={{
                        backgroundColor: '#f1f1f1',
                        flex: 1,
                        justifyContent: 'flex-start',
                        alignContent: 'center',
                        alignItems: 'center',
                        paddingTop: '10%',
                    }}>
                    <Feather name="folder" size={45} color={'grey'}></Feather>
                    <Text
                        style={{
                            fontSize: 15,
                            fontWeight: 'bold',
                            color: 'grey',
                            paddingTop: '2%',
                        }}>
                        No Data
                    </Text>
                </View>
            );
        }
    };
    return (
        <SafeAreaView>
            <View
                style={{
                    width: '100%',
                    height: 60,
                    backgroundColor: '#16247d',
                    flexDirection: 'row',
                    alignItems: 'center',
                }}>
                <Feather
                    onPress={() => {
                        navigation.openDrawer();
                    }}
                    name="menu"
                    size={iconSize}
                    style={{
                        color: 'white',
                        left: 10
                    }}
                />
                <Text
                    style={{
                        fontSize: fontTitle,
                        color: 'white',
                        fontWeight: 'bold', textAlign: 'center',
                        paddingLeft: '30%',
                    }}>
                    All Professors
                </Text>
                <Feather
                    name="search"
                    size={iconSize}
                    style={{
                        color: 'white',
                        marginLeft: '25%',
                    }}
                />
            </View>
            <View style={styles.Row}>
                <View style={styles.LeftBar}>
                    <FlatList
                        style={{ marginBottom: height * 0.18 }}
                        showsVerticalScrollIndicator={false}
                        data={SideBarFilter}
                        renderItem={({ item, index }) => {
                            return (
                                <TouchableOpacity
                                    activeOpacity={0.8}
                                    onPress={() => {
                                        SelectItem(index);
                                        SetTitle(item.title);
                                        CheckId(item.id);
                                    }}>
                                    <View
                                        key={index}
                                        style={{ alignItems: 'center', marginTop: height * 0.03 }}>
                                        <View
                                            style={{
                                                width: 50,
                                                height: 50,
                                                alignContent: 'center',
                                                paddingTop: 3,
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                borderRadius: 50 / 2,
                                                // backgroundColor: ItemSelecter(selectColor === index)
                                                backgroundColor:
                                                    selectColor === index ? '#16247d' : '#DCDCDC',
                                            }}>
                                            <Image
                                                style={{ width: 30, height: 30 }}
                                                source={item.icon}
                                                tintColor={ItemSelecter(index)}></Image>
                                        </View>
                                        <Text
                                            style={{
                                                marginTop: 15,
                                                fontWeight: 'bold',
                                                color: 'grey',
                                                fontSize: 12,
                                                textAlign: 'center',
                                            }}>
                                            {item.title}
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            );
                        }}></FlatList>
                </View>
                <View style={styles.RightBar}>
                    <BodyRightBar />
                </View>
            </View>
        </SafeAreaView>
    );
};

export default Professor;

const styles = StyleSheet.create({
    Row: {
        flexDirection: 'row',
    },
    LeftBar: {
        height: height,
        width: width * 0.3,
        backgroundColor: 'white',
        paddingHorizontal: 5,
    },
    Circle: {
        width: 60,
        height: 60,
        backgroundColor: '#16247d',
        borderRadius: 60 / 1,
    },
    Column: {},
    RightBar: {
        width: width * 0.69,
        height: 'auto',
    },
    Card: {
        width: width * 0.319,
        height: height * 0.2,
        backgroundColor: 'white',
        marginTop: 7,
        marginLeft: 7,
        borderRadius: 8,
        elevation: 3,
        zIndex: 1000,
    },
    Profile: {
        width: 60,
        height: 60,
        borderRadius: 60 / 2,
        backgroundColor: '#eef1f6',
        alignSelf: 'center',
        marginTop: 10,
    },
});
