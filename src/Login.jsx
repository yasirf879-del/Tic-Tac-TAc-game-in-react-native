import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text,  TouchableOpacity, View } from 'react-native';
import { TextInput, ImageBackground, Image } from 'react-native';
import { Button, Alert } from 'react-native';

export default function Login() {

  return (

    <View style={styles.container}>
      <ImageBackground style={styles.Backimage}
        source={require('../assets/i.png')}
        resizeMode='cover'>
        <Text style={styles.wtext}>
          Welcome Back
        </Text>
        <Text style={styles.ttext}>
          Login to start your journey!
        </Text>

      </ImageBackground>
      <View style={[styles.c2, {
        borderTopLeftRadius: 35,
        borderTopRightRadius: 35
      }]}>
        <TextInput style={styles.inputtext} placeholder="Email Address" placeholderTextColor='#a39e9e' />
        <TextInput style={styles.inputtext} placeholder="Password" secureTextEntry={true} placeholderTextColor='#a39e9e' />
        <StatusBar style="auto" />
        <TouchableOpacity style={styles.forgetbutton} onPress={() => Alert.alert("forget button pressed!")}
          activeOpacity={0.7}>
          <Text style={{
            color: '#7C4DFF',
            fontSize: 16,
            fontWeight: 'bold',
            opacity: 0.8
          }}>
            Forget password?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginbutton} onPress={() => Alert.alert("Login button pressed!")}
          activeOpacity={0.7}>
          <Text style={{
            color: '#ffffff',
            fontSize: 16,
            fontWeight: 'bold'
          }}>
            Login</Text>
        </TouchableOpacity>
        <Text style={styles.textline}>────────  or continue with  ────────</Text>
        <View style={{
          flexDirection: 'row',
          gap: 40,
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 10
        }}>
          <TouchableOpacity style={styles.continueButton} onPress={() => Alert.alert("Google button pressed!")}>
            <Image style={styles.imageto} source={require('../assets/google.png')} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.continueButton} onPress={() => Alert.alert("Facebook button pressed!")}>
            <Image style={styles.imageto} source={require('../assets/Facebook.png')} />
          </TouchableOpacity>
        </View>
        <View style={styles.signupbutton}>
          <Text>Don't have an account?</Text>
          <TouchableOpacity onPress={() => Alert.alert("Sign up button pressed!")}
            activeOpacity={0.7}>
            <Text style={{
              color: '#7C4DFF',
              fontSize: 16,
              fontWeight: 'bold'
            }}>
              Sign up</Text>
          </TouchableOpacity>
        </View>
        
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  Backimage: {
    flex: 0.45,
    width: '100%',
  },
  wtext: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000000',
    marginTop: 80,
    marginLeft: 20,
    fontFamily: 'inter',
  },
  ttext: {
    fontSize: 15,
    color: '#000000',
    marginTop: 10,
    marginLeft: 20,
  },
  c2: {
    flex: 0.55,
    width: '100%',
    backgroundColor: '#fff',
    marginTop: -35,

  },
  inputtext: {
    width: '80%',
    height: 50,
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    marginTop: 20,
    marginLeft: '10%',
    paddingLeft: 20,
    fontSize: 16,
    fontWeight: 'bold',
    borderColor: '#d6d0d0',
    borderWidth: 0.5,

  },
  loginbutton: {
    width: '80%',
    height: 50,
    backgroundColor: '#7C4DFF',
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 20,
    opacity: 0.9,
  },
  textline: {
    textAlign: 'center',
    marginTop: 10,
    marginLeft: '10%',
    color: '#000000',
    opacity: 0.3,
    width: '80%',

  },
  forgetbutton: {

    alignSelf: 'flex-end',
    marginRight: '10%',
    marginTop: 10
  },
  signupbutton: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    opacity: 0.8,
    flexDirection: 'row',
  },
  continueButton: {
    width: 60,
    height: 55,
    backgroundColor: '#ffffff',
    borderRadius: 40,
    marginTop: 10,
    opacity: 0.9,
    elevation: 8,
    borderWidth: 0.5,
    borderColor: '#d6d0d0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageto: {
    height: 40,
    width: 50,
    resizeMode: 'contain'
  }

});
