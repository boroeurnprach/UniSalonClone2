import * as React from 'react';
import { View, StyleSheet, Button, Dimensions, Text, TouchableOpacity } from 'react-native';
import { Video, ResizeMode } from 'expo-av';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feature from 'react-native-vector-icons/Feather';

export default function VideoPlayerScreen({ navigation }) {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  return (
    <View style={styles.container}>
    <View
                style={{
                    width: '100%',
                    height: 80,
                    backgroundColor: '#16247d',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                <Feature
                  
                  name="arrow-left"
                  size={24}
                  style={{
                    
                    

                    color: 'white',
                  }}
                
              />
                </TouchableOpacity>
                <View style={{ width: '90%'}}>
                    <Text
                        style={{
                            textAlign: 'center', color: 'white', fontSize: 20,
                        }}>
                        Videos
                    </Text>
                </View>

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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
  },
  video: {
    alignSelf: 'center',
    width: 320,
    height: 200,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
