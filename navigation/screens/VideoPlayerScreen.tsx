// import {
//   StyleSheet,
//   Text,
//   View,
//   SafeAreaView,
//   TouchableOpacity,
//   ScrollView,
//   Image,
// } from 'react-native';
// import React from 'react';
// import {useNavigation} from '@react-navigation/native';
// import AntDesign from 'react-native-vector-icons/AntDesign';
// import Video from 'react-native-video';

// const VideoPlayerScreen = ({navigation}) => {


//   return (
//     <SafeAreaView>
//       <View
//         style={{
//           width: 'auto',
//           height: 40,
//           backgroundColor: '#16247d',
//           flexDirection: 'row',
//           alignItems: 'center',
//           paddingHorizontal: 17,
//         }}>
//         <TouchableOpacity
//           activeOpacity={1}
//           onPress={() => {
//             navigation.goBack();
//           }}>
//           <AntDesign
//             name="arrowleft"
//             size={25}
//             style={{
//               color: 'white',
//             }}
//           />
//         </TouchableOpacity>
//         <Text
//           style={{
//             fontWeight: 'bold',
//             fontSize: 17,
//             color: 'white',
//             textAlign: 'center',
//             marginLeft: '32%',
//           }}>
//           Video Player
//         </Text>
//       </View>
//       <View style={{height: 280, width: '100%'}}>
//         <Video
//           // loop
//           controls
//           // autoPlay
//           volume={20}
//           source={{ uri: 'https://www.youtube.com/watch?v=y_O9k_SKCcM' }}
//           style={{
//             position: 'absolute',
//             width: '100%',
//             height: '100%',
//           }}
//         />
//       </View>
      // <View style={{marginLeft: 10, marginTop: 10}}>
      //   <Text style={{fontSize: 15, color: 'black'}}>
      //     ធ្វើការកក់ទុក្ខជាមុននៅរាល់ជាងនិងសេវាកម្មដែលបងប្អូនពេញចិត្ត
      //   </Text>
      //   <Text style={{marginTop: 5, fontSize: 12, color: 'grey'}}>
      //     10/11/2023 At 13.54 PM
      //   </Text>
      // </View>
//       <TouchableOpacity
//         style={{
//           height: 100,
//           backgroundColor: 'white',
//           marginTop: 20,
//           width: '100%',
//           flexDirection: 'row',
//           alignItems: 'center',
//           elevation: 3,
//           zIndex: 1000,
//         }}>
//         <Image
//           source={require('../../assets/salon4.jpeg')}
//           style={{
//             width: '25%',
//             height: '80%',
//             borderRadius: 5,
//             marginLeft: '3%',
//           }}></Image>
//         <View
//           style={{
//             marginLeft: 10,
//             width: '75%',
//             height: '80%',
//             flex: 1,
//           }}>
//           <Text
//             style={{
//               fontSize: 15,
//               color: 'black',
//               fontWeight: 'bold',
//             }}>
//             តោះស្វែងយល់ពីរបៀបចុះឈ្មោះក្នុងការ
//           </Text>
//           <Text
//             style={{
//               fontSize: 15,
//               color: 'black',
//               fontWeight: 'bold',
//             }}>
//             ប្រើប្រាស់ App Unisalon
//           </Text>
//           <Text
//             style={{
//               color: 'grey',
//               fontSize: 12,
//               marginTop: 15,
//             }}>
//             17 Dec 2021 At 11:59 AM
//           </Text>
//         </View>
//       </TouchableOpacity>
      // <TouchableOpacity
      //   style={{
      //     height: 100,
      //     backgroundColor: 'white',
      //     marginTop: 10,
      //     width: '100%',
      //     flexDirection: 'row',
      //     alignItems: 'center',
      //     elevation: 3,
      //     zIndex: 1000,
      //   }}>
      //   <Image
      //     source={require('../../assets/salon4.jpeg')}
      //     style={{
      //       width: '25%',
      //       height: '80%',
      //       borderRadius: 5,
      //       marginLeft: '3%',
      //     }}></Image>
      //   <View
      //     style={{
      //       marginLeft: 10,
      //       width: '75%',
      //       height: '80%',
      //       flex: 1,
      //     }}>
      //     <Text
      //       style={{
      //         fontSize: 15,
      //         color: 'black',
      //         fontWeight: 'bold',
      //       }}>
      //       អរគុណប្អូន Sophorn Phou បានប្រើប្រាស់
      //     </Text>
      //     <Text
      //       style={{
      //         fontSize: 15,
      //         color: 'black',
      //         fontWeight: 'bold',
      //       }}>
      //       សេវាកម្មនៅហាង Men_Style
      //     </Text>
      //     <Text
      //       style={{
      //         color: 'grey',
      //         fontSize: 12,
      //         marginTop: 15,
      //       }}>
      //       17 Dec 2021 At 11:59 AM
      //     </Text>
      //   </View>
      // </TouchableOpacity>
//     </SafeAreaView>
//   );
// };

// export default VideoPlayerScreen;

// const styles = StyleSheet.create({});


import * as React from 'react';
import { View, StyleSheet, Button, Dimensions, Text, TouchableOpacity, Image } from 'react-native';
import { Video, ResizeMode } from 'expo-av';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';

const fontTitle = 14;
export default function VideoPlayerScreen({ navigation }) {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  return (
    <View style={styles.container}>
  <View
        style={{
          width: '100%',
          height: 60,
          backgroundColor: '#16247d',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <AntDesign
          onPress={() => {
            navigation.navigate("MainTabs");
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
          Videos
        </Text>
      </View>
      <Video
        ref={video}
        style={styles.video}
        source={{
          uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
        }}
        useNativeControls
        resizeMode={ResizeMode.CONTAIN}
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
      <View style={styles.buttons}>

      </View>
      <View style={{marginLeft: 10, marginTop: 10}}>
        <Text style={{fontSize: 15, color: 'black'}}>
          ធ្វើការកក់ទុក្ខជាមុននៅរាល់ជាងនិងសេវាកម្មដែលបងប្អូនពេញចិត្ត
        </Text>
        <Text style={{marginTop: 5, fontSize: 12, color: 'grey'}}>
          10/11/2023 At 13.54 PM
        </Text>
      </View>
      <TouchableOpacity
        style={{
          height: 100,
          backgroundColor: 'white',
          marginTop: 10,
          width: '100%',
          flexDirection: 'row',
          alignItems: 'center',
          elevation: 3,
          zIndex: 1000,
        }}>
        <Image
          source={require('../../assets/salon4.jpeg')}
          style={{
            width: '25%',
            height: '80%',
            borderRadius: 5,
            marginLeft: '3%',
          }}></Image>
        <View
          style={{
            marginLeft: 10,
            width: '75%',
            height: '80%',
            flex: 1,
          }}>
          <Text
            style={{
              fontSize: 15,
              color: 'black',
              
            }}>
            អរគុណប្អូន Sophorn Phou បានប្រើប្រាស់
          </Text>
          <Text
            style={{
              fontSize: 15,
              color: 'black',
              
            }}>
            សេវាកម្មនៅហាង Men_Style
          </Text>
          <Text
            style={{
              color: 'grey',
              fontSize: 12,
              marginTop: 2,
            }}>
            17 Dec 2021 At 11:59 AM
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=> navigation.navigate("VideoPlayerScreen")}
        style={{
          height: 100,
          backgroundColor: 'white',
          marginTop: 10,
          width: '100%',
          flexDirection: 'row',
          alignItems: 'center',
          elevation: 3,
          zIndex: 1000,
        }}>
        <Image
          source={require('../../assets/salon3.jpeg')}
          style={{
            width: '25%',
            height: '80%',
            borderRadius: 5,
            marginLeft: '3%',
          }}></Image>
        <View
          style={{
            marginLeft: 10,
            width: '75%',
            height: '80%',
            flex: 1,
          }}>
          <Text
            style={{
              fontSize: 15,
              color: 'black',
              
            }}>
            អរគុណប្អូន Sophorn Phou បានប្រើប្រាស់
          </Text>
          <Text
            style={{
              fontSize: 15,
              color: 'black',
              
            }}>
            សេវាកម្មនៅហាង Men_Style
          </Text>
          <Text
            style={{
              color: 'grey',
              fontSize: 12,
              marginTop: 2,
            }}>
            17 Dec 2021 At 11:59 AM
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  video: {
    alignSelf: 'center',
    width: '100%',
    height: 200,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});