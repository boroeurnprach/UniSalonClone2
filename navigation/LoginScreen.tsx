// import React, { useState } from 'react';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import { useNavigation } from '@react-navigation/native';
// import {
//     View,
//     Text,
//     TextInput,
//     TouchableOpacity,
//     StyleSheet,
//     Image
// } from 'react-native';

// const LoginScreen = ({navigation}) => {
//     const onPressLogin = () => {
//         // Do something about the login operation
//     };

//     const onPressForgotPassword = () => {
//         // Do something about the forgot password operation
//     };

//     const [state, setState] = useState({
//         number: '',
//         password: '',
//     });


//     return (

//         <View style={{ justifyContent: 'space-between' }}>
//             <Text>

//             </Text>

//             <View style={styles.container}>


//                 <Image
//                     style={styles.logo}
//                     source={require('../assets/splash.png')}
//                 />
//                 <View style={styles.inputView}>
//                     <Text style={styles.nationCode}>+855 | </Text>
//                     <TextInput
//                         style={styles.inputText}
//                         placeholder="Enter your number"
//                         placeholderTextColor="#003f5c"
//                         onChangeText={(text) => setState({ ...state, number: text })}
//                     />
//                 </View>
//                 <View style={styles.inputPassView}>
//                     <TextInput
//                         style={styles.inputText}
//                         secureTextEntry
//                         placeholder="Password"
//                         placeholderTextColor="#003f5c"
//                         onChangeText={(text) => setState({ ...state, password: text })}
//                     />
//                     <Icon name="eye" size={20} color="#003f5c" style={{ marginLeft: 10 }} />
//                 </View>
//                 <TouchableOpacity onPress={onPressLogin} style={styles.loginBtn}>
//                     <Text style={styles.loginText}>LOGIN</Text>
//                 </TouchableOpacity>

//                 <TouchableOpacity onPress={onPressForgotPassword}>
//                     <Text style={styles.forgotAndSignUpText}>Forgot Password?</Text>
//                 </TouchableOpacity>

//                 <View style={{ flexDirection: 'row', alignItems: 'center', paddingTop: 20 }}>
//                     <View style={{ flex: 1, height: 1, backgroundColor: '#003f5c', marginLeft: 10 }} />
//                     <View>
//                         <Text>  or  </Text>
//                     </View>
//                     <View style={{ flex: 1, height: 1, backgroundColor: '#003f5c', marginRight: 10 }} />
//                 </View>
//                 <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
//                     <TouchableOpacity onPress={onPressLogin} style={styles.retangle}>
//                         <Image
//                             style={styles.loginWithSocial}
//                             source={require('../assets/facebook_logo.png')}
//                         />
//                         <Text style={styles.textSocial}>Login with Facebook</Text>
//                     </TouchableOpacity>
//                     <TouchableOpacity onPress={onPressLogin} style={styles.retangle}>
//                         <Image
//                             style={styles.loginWithSocial}
//                             source={require('../assets/google_logo.png')}
//                         />
//                         <Text style={styles.textSocial}>Login with Google</Text>
//                     </TouchableOpacity>
//                 </View>

//             </View>
//         </View>
//     );
// };




// const styles = StyleSheet.create({

//     title: {
//         fontSize: 50,
//         color: '#134286',
//         marginBottom: 40,
//     },
//     inputView: {
//         flexDirection: 'row',
//         width: '90%',
//         backgroundColor: 'white',
//         borderRadius: 10,
//         height: 50,
//         marginBottom: 20,
//         alignItems: 'center',
//     },
//     inputPassView: {
//         width: '90%',
//         backgroundColor: 'white',
//         borderRadius: 10,
//         height: 50,
//         marginBottom: 20,
//         alignItems: 'center',
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         paddingLeft: 20,
//         paddingRight: 20,
//     },
//     inputText: {
//         height: 50,
//         color: 'black',
//     },
//     forgotAndSignUpText: {
//         color: '#134286',
//         fontSize: 11,
//     },
//     loginBtn: {
//         width: '90%',
//         backgroundColor: '#134286',
//         borderRadius: 10,
//         height: 50,
//         alignItems: 'center',
//         justifyContent: 'center',
//         marginTop: 10,
//         marginBottom: 40,
//     },
//     loginText: {
//         color: 'white',
//         fontSize: 10,
//     },
//     logo: {
//         width: 100,
//         height: 100,
//         margin: 20,
//     },
//     loginWithSocial: {
//         width: 30,
//         height: 30,
//         margin: 2,
//     },
//     retangle: {
//         width: '40%',
//         backgroundColor: 'white',
//         height: 40,
//         borderRadius: 10,
//         flexDirection: 'row',
//         justifyContent: 'center',
//         alignItems: 'center',
//         margin: 10,

//     },
//     text: {
//         fontSize: 10,
//         color: 'white'
//     },
//     textSocial: {
//         color: '#134286',
//         fontSize: 10,

//     },
//     nationCode: {
//         marginLeft: 20,
//         color: '#003f5c',
//         fontSize: 13,
//     },
//     arrowButton: {
//         position: 'absolute',
//         right: '30%',
//         bottom: '100%',
//         zIndex: 1,
//     },

// });

// export default LoginScreen;


import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image
} from 'react-native';

const fontTitle = 14;

const LoginScreen = ({ navigation }) => {
  const onPressLogin = () => {
    navigation.navigate("MainTabs")
  };

  const onPressForgotPassword = () => {
    // Do something about the forgot password operation
  };

  const [state, setState] = useState({
    number: '',
    password: '',
  });


  return (

    <View style={styles.container}>
    <View
        style={{
          width: '100%',
          height: 60,
          // backgroundColor: '#16247d',
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
            color: 'black',
            position: 'absolute',
            left: 10,
            justifyContent: 'center',
            alignItems: 'center',           
          
          }}
        />
      
      </View>

      <Image
        style={styles.logo}
        source={require('../assets/user.png')}
      />
      <View style={styles.inputView}>
        <Text style={styles.nationCode}>+855 | </Text>
        <TextInput
          style={styles.inputText}
          placeholder="Enter your number"
          placeholderTextColor="#003f5c"
          onChangeText={(text) => setState({ ...state, number: text })}
        />
      </View>
      <View style={styles.passView}>
        <TextInput
          style={styles.inputText}
          secureTextEntry
          placeholder="Password"
          placeholderTextColor="#003f5c"
          onChangeText={(text) => setState({ ...state, password: text })}
        />
        <Icon name="eye" size={20} color="#003f5c" style={{ marginLeft: 10 }} />

      </View>
      <TouchableOpacity onPress={onPressLogin} style={styles.loginBtn}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=> navigation.navigate("ForgotPasswordScreen")}>
        <Text style={styles.forgotAndSignUpText}>Forgot Password?</Text>
      </TouchableOpacity>


      <View style={{ flexDirection: 'row', alignItems: 'center', paddingTop: 20 }}>
        <View style={{ flex: 1, height: 1, backgroundColor: '#003f5c', marginLeft: 10 }} />
        <View>
          <Text>  or  </Text>
        </View>
        <View style={{ flex: 1, height: 1, backgroundColor: '#003f5c', marginRight: 10 }} />
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
        <TouchableOpacity onPress={onPressLogin} style={styles.retangle}>
          <Image
            style={styles.loginWithSocial}
            source={require('../assets/facebook_logo.png')}
          />
          <Text style={styles.textSocial}>Login with Facebook</Text>

        </TouchableOpacity>
        <TouchableOpacity onPress={onPressLogin} style={styles.retangle}>
          <Image
            style={styles.loginWithSocial}
            source={require('../assets/google_logo.png')}
          />
          <Text style={styles.textSocial}>Login with Google</Text>

        </TouchableOpacity>
        {/* <Image
                style={styles.loginWithSocial}
                source={require('../assets/facebook_logo.png')}
            /> */}

      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F7F8FA',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 50,
    color: '#134286',
    marginBottom: 40,
  },
  inputView: {
    flexDirection: 'row',
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 10,
    height: 50,
    marginBottom: 20,
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  passView: {
    flexDirection: 'row',
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 10,
    height: 50,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,

  },
  inputText: {
    height: 50,
    color: 'black',
  },
  forgotAndSignUpText: {
    color: '#134286',
    fontSize: 11,
  },
  loginBtn: {
    width: '90%',
    backgroundColor: '#134286',
    borderRadius: 10,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 40,
  },
  loginText: {
    color: 'white',
    fontSize: 10,
  },
  logo: {
    width: 100,
    height: 100,
    margin: 20,
  },
  loginWithSocial: {
    width: 30,
    height: 30,
    margin: 2,
  },
  retangle: {
    width: '40%',
    backgroundColor: 'white',
    height: 40,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,

  },
  text: {
    fontSize: 10,
    color: 'white'
  },
  textSocial: {
    color: '#134286',
    fontSize: 10,

  }
  ,
  nationCode: {

  }
});

export default LoginScreen;
