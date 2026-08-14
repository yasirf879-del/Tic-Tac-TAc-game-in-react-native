import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert,
  ActivityIndicator,
} from "react-native";
import { ImageBackground, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Buttons, TextInputs } from "../components";
import { auth } from "../../firebase.config";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function Login() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = () => {
    if (email.trim() === "") {
      Alert.alert("Error", "Email is required.");
      return;
    }
    if (password.trim() === "") {
      Alert.alert("Error", "Password is required.");
      return;
    }

    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        setIsLoading(false);
        navigation.replace("Homepage");
      })
      .catch((error) => {
        setIsLoading(false);
        Alert.alert("Error", error.message);
      });
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.Backimage}
        source={require("../../assets/i.png")}
        resizeMode="cover"
      >
        <Text style={styles.wtext}>Welcome Back </Text>
        <Text style={styles.ttext}>Login to start your journey!</Text>
      </ImageBackground>
      <View
        style={[
          styles.c2,
          {
            borderTopLeftRadius: 35,
            borderTopRightRadius: 35,
          },
        ]}
      >
        <TextInputs
          placeholder="Email Address"
          placeholderTextColor="#a39e9e"
          value={email}
          onChangeText={setEmail}
          showIcon={true}
          icon="mail"
          iconColor="#7C4DFF"
          iconSize={20}
        />

        <TextInputs
          placeholder="Password"
          placeholderTextColor="#a39e9e"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
          showIcon={true}
          icon="lock"
          iconColor="#7C4DFF"
          iconSize={20}
        />
        <StatusBar style="auto" />
        <TouchableOpacity
          style={styles.forgetbutton}
          onPress={() => Alert.alert("forget button pressed!")}
          activeOpacity={0.7}
        >
          <Text
            style={{
              color: "#7C4DFF",
              fontSize: 16,
              fontWeight: "bold",
              opacity: 0.8,
            }}
          >
            Forget password?
          </Text>
        </TouchableOpacity>

        <Buttons
          title={isLoading ? "" : "Login"}
          onPress={handleLogin}
          showIcon={false}
          iconColor="#ffffff"
          iconSize={20}
          iconFamily="Ionicons"
        />
        {isLoading && (
          <ActivityIndicator
            size="large"
            color="#070707"
            style={{ position: "absolute", alignSelf: "center", marginTop: 48 }}
          />
        )}

        <Text style={styles.textline}>──────── or continue with ────────</Text>
        <View
          style={{
            flexDirection: "row",
            gap: 40,
            alignItems: "center",
            justifyContent: "center",
            marginTop: 10,
          }}
        >
          <TouchableOpacity
            style={styles.continueButton}
            onPress={() => Alert.alert("Google button pressed!")}
          >
            <Image
              style={styles.imageto}
              source={require("../../assets/google.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.continueButton}
            onPress={() => Alert.alert("Facebook button pressed!")}
          >
            <Image
              style={styles.imageto}
              source={require("../../assets/Facebook.png")}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.signupbutton}>
          <Text>Don't have an account?</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("Signup")}
            activeOpacity={0.7}
          >
            <Text
              style={{
                color: "#7C4DFF",
                fontSize: 16,
                fontWeight: "bold",
              }}
            >
              Sign up
            </Text>
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
    width: "100%",
  },
  wtext: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#000000",
    marginTop: 80,
    marginLeft: 20,
    fontFamily: "inter",
  },
  ttext: {
    fontSize: 15,
    color: "#000000",
    marginTop: 10,
    marginLeft: 20,
  },
  c2: {
    flex: 0.55,
    width: "100%",
    backgroundColor: "#fff",
    marginTop: -35,
  },
  inputtext: {
    width: "80%",
    height: 50,
    backgroundColor: "#f2f2f2",
    borderRadius: 10,
    marginTop: 20,
    marginLeft: "10%",
    paddingLeft: 20,
    fontSize: 16,
    fontWeight: "bold",
    borderColor: "#d6d0d0",
    borderWidth: 0.5,
  },

  textline: {
    textAlign: "center",
    marginTop: 10,
    marginLeft: "10%",
    color: "#000000",
    opacity: 0.3,
    width: "80%",
  },
  forgetbutton: {
    alignSelf: "flex-end",
    marginRight: "10%",
    marginTop: 10,
  },
  signupbutton: {
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    opacity: 0.8,
    flexDirection: "row",
  },
  continueButton: {
    width: 60,
    height: 55,
    backgroundColor: "#ffffff",
    borderRadius: 40,
    marginTop: 10,
    opacity: 0.9,
    elevation: 8,
    borderWidth: 0.5,
    borderColor: "#d6d0d0",
    justifyContent: "center",
    alignItems: "center",
  },
  imageto: {
    height: 30,
    width: 30,
    resizeMode: "contain",
  },
});
