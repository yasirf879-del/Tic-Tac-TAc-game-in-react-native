import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import * as Icon from "@expo/vector-icons";
import { TextInputs } from "../components";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  View,
  Alert,
  ActivityIndicator,
} from "react-native";
import { Buttons } from "../components";
import Checkbox from "expo-checkbox";
import validateForm from "./Validation";
export default function Signup() {
  const navigation = useNavigation();
  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");
  const [isChecked, setChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const handleSignup = async () => {
    try {
      setIsLoading(true);

      await validateForm(
        fullname,
        email,
        password,
        confirmedPassword,
        isChecked,
      );

      setIsLoading(false);

      Alert.alert("Success", "Account created successfully!");

      navigation.replace("Homepage", { email });
    } catch (error) {
      setIsLoading(false);
      Alert.alert("Error", error.message);
    }
  };

  return (
    <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
      <StatusBar style="dark" />
      <View style={styles.Container}>
        <View
          style={{
            marginTop: 120,
            flexDirection: "row",
          }}
        >
          <View style={{ width: 180, height: 120 }}>
            <Text style={styles.wtext}>Create Account</Text>
            <Text style={styles.ttext}>Sign up to get started!</Text>
          </View>

          <Image
            style={styles.createimage}
            source={require("../../assets/createimage.png")}
          />
        </View>
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
            placeholder="Full Name"
            placeholderTextColor="#a39e9e"
            value={fullname}
            onChangeText={setFullName}
            showIcon={true}
            icon="person"
            iconColor="#7C4DFF"
            iconSize={20}
          />

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

          <TextInputs
            placeholder="Confirm Password"
            secureTextEntry={true}
            placeholderTextColor="#a39e9e"
            secureTextEntry={true}
            value={confirmedPassword}
            onChangeText={setConfirmedPassword}
            showIcon={true}
            icon="lock"
            iconColor="#7C4DFF"
            iconSize={20}
          />

          <View style={styles.termsContainer}>
            <Checkbox
              value={isChecked}
              onValueChange={setChecked}
              color={isChecked ? "#7C4DFF" : undefined}
            />
            <Text style={{ fontSize: 14, color: "#000000", marginLeft: 5 }}>
              I agree to the
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
          <Buttons
            title="Sign up"
            onPress={handleSignup}
            showIcon={false}
            iconColor="#ffffff"
            iconSize={20}
            iconFamily="Ionicons"
          />
          {isLoading && (
            <ActivityIndicator
              size="large"
              color="#010102"
              style={{
                position: "absolute",
                alignSelf: "center",
                marginTop: 48,
              }}
            />
          )}
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
    marginLeft: 10,
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
    width: "50%",
    height: 120,
    resizeMode: "cover",
  },
  c2: {
    height: "100%",
    width: "100%",
    backgroundColor: "#fff",
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
    marginTop: 10,
    paddingRight: 20,
    alignItems: "center",
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
