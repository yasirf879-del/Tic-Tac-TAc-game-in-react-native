import { StatusBar } from "expo-status-bar";

import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  View,
  TextInput,
  Alert,
  Image,
} from "react-native";
import Checkbox from "expo-checkbox";

export default function Signup() {
  const [isChecked, setChecked] = useState(false);

  return (
    <ScrollView style={{ paddingBottom: 20, backgroundColor: "#fff" }}>
      <StatusBar style="dark" />
      <View style={styles.Container}>
        <View style={{ marginTop: 120 }}>
          <Text style={styles.wtext}>Create Account</Text>
          <Text style={styles.ttext}>Sign up to get started!</Text>
        </View>
        <ImageBackground
          style={styles.createimage}
          source={require("../../assets/createimage.png")}
        ></ImageBackground>
        <View
          style={[
            styles.c2,
            {
              borderTopLeftRadius: 35,
              borderTopRightRadius: 35,
            },
          ]}
        >
          <TextInput
            style={styles.inputtext}
            placeholder="Full Name"
            placeholderTextColor="#a39e9e"
          />
          <TextInput
            style={styles.inputtext}
            placeholder="Email Address"
            placeholderTextColor="#a39e9e"
          />
          <TextInput
            style={styles.inputtext}
            placeholder="Password"
            secureTextEntry={true}
            placeholderTextColor="#a39e9e"
          />
          <TextInput
            style={styles.inputtext}
            placeholder="Confirm Password"
            secureTextEntry={true}
            placeholderTextColor="#a39e9e"
          />
          <StatusBar style="auto" />
          <View style={styles.termsContainer}>
            <Checkbox
              value={isChecked}
              onValueChange={setChecked}
              color={isChecked ? "#7C4DFF" : undefined}
            />
            <Text style={{ fontSize: 14, color: "#000000", marginLeft: 5 }}>
              I agree to the{" "}
            </Text>
            <TouchableOpacity
              onPress={() => Alert.alert("Terms&Conditions button pressed!")}
              activeOpacity={0.7}
            >
              <Text
                style={{
                  color: "#7C4DFF",
                  fontSize: 14,
                  fontWeight: "bold",
                  opacity: 0.8,
                }}
              >
                Terms&Conditions
              </Text>
            </TouchableOpacity>
            <Text> and </Text>
            <TouchableOpacity
              onPress={() => Alert.alert("Privacy Policy button pressed!")}
              activeOpacity={0.7}
            >
              <Text
                style={{
                  color: "#7C4DFF",
                  fontSize: 14,
                  fontWeight: "bold",
                  opacity: 0.8,
                }}
              >
                Privacy Policy
              </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.signupbutton}
            onPress={() => Alert.alert("Sign up button pressed!")}
            activeOpacity={0.7}
          >
            <Text
              style={{
                color: "#ffffff",
                fontSize: 18,
                fontWeight: "bold",
              }}
            >
              Sign up
            </Text>
          </TouchableOpacity>
          <Text style={styles.textline}>
            ──────── or continue with ────────
          </Text>
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
          <View style={styles.loginbutton}>
            <Text>Already have an account?</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("Login")}
              activeOpacity={0.7}
            >
              <Text
                style={{
                  color: "#7C4DFF",
                  fontSize: 16,
                  fontWeight: "bold",
                }}
              >
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    marginLeft: 20,
  },

  wtext: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#1A1A1A",
  },

  ttext: {
    fontSize: 15,
    color: "#777",
    marginTop: 6,
  },
  createimage: {
    width: "80%",
    height: 180,
    resizeMode: "contain",
    marginLeft: 140,
    marginTop: -100,
  },
  c2: {
    flex: 1,
    width: "100%",
    backgroundColor: "#fff",
    marginTop: -20,
  },
  inputtext: {
    width: "90%",
    height: 50,
    backgroundColor: "#f2f2f2",
    borderRadius: 10,
    marginTop: 20,
    paddingLeft: 20,
    fontSize: 16,
    fontWeight: "bold",
    borderColor: "#d6d0d0",
    borderWidth: 0.5,
  },
  signupbutton: {
    width: "90%",
    height: 50,
    backgroundColor: "#7C4DFF",
    borderRadius: 28,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 20,
    opacity: 0.9,
  },
  textline: {
    textAlign: "center",
    marginTop: 10,
    marginLeft: "10%",
    color: "#000000",
    opacity: 0.3,
    width: "80%",
  },
  loginbutton: {
    marginTop: 10,
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
    height: 40,
    width: 50,
    resizeMode: "contain",
  },
  termsContainer: {
    flexDirection: "row",
    fontSize: 14,
    // flexWrap: "wrap",
    marginTop: 10,
    paddingHorizontal: 10,
    marginLeft: -10,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginTop: 50,
  },

  textContainer: {
    flex: 1,
  },

  heroImage: {
    width: 120,
    height: 120,
    resizeMode: "contain",
  },
});
