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
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { registerUser } from "../manager/authManager";
import { Buttons } from "../components";
import Checkbox from "expo-checkbox";
import getSignupValidationError from "./Validation";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebase.config";
import { useGoogleLogin } from "../auth/socialAuth";
export default function Signup() {
  const navigation = useNavigation();
  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");
  const [isChecked, setChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const google = useGoogleLogin();

  const socialLoading = google.loading;
  const handleSignup = async () => {
    const validationError = getSignupValidationError(
      fullname,
      email,
      password,
      confirmedPassword,
      isChecked,
    );

    if (validationError) {
      Alert.alert("Check your details", validationError);
      return;
    }

    try {
      setIsLoading(true);

      const credential = await createUserWithEmailAndPassword(
        auth,
        email.trim(),
        password,
      );
      await updateProfile(credential.user, { displayName: fullname.trim() });
      await registerUser(credential.user, fullname.trim());
      Alert.alert("Success", "Account created successfully!");
    } catch (error) {
      Alert.alert("Error", error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <ScrollView
        contentContainerStyle={{ paddingBottom: 20, flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
      >
        <StatusBar style="dark" />
        <View style={styles.Container}>
          <View
            style={{
              flexDirection: "row",
              paddingLeft: 10,
              marginTop: 100,
            }}
          >
            <View style={{ flex: 1, height: 120 }}>
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
              autoCapitalize="none"
              autoComplete="email"
              keyboardType="email-address"
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
              autoComplete="new-password"
              showIcon={true}
              icon="lock"
              iconColor="#7C4DFF"
              iconSize={20}
            />

            <TextInputs
              placeholder="Confirm Password"
              placeholderTextColor="#a39e9e"
              secureTextEntry={true}
              value={confirmedPassword}
              onChangeText={setConfirmedPassword}
              autoComplete="new-password"
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
              <Text
                style={{
                  fontSize: 14,
                  color: "#000000",
                  marginLeft: 5,
                  flexShrink: 0,
                }}
                numberOfLines={1}
              >
                I agree to the
              </Text>
              <TouchableOpacity
                onPress={() => navigation.navigate("TermsConditions")}
                activeOpacity={0.7}
              >
                <Text
                  style={{
                    color: "#7C4DFF",
                    fontSize: 14,
                    fontWeight: "bold",
                    opacity: 0.8,
                    flexShrink: 0,
                  }}
                  numberOfLines={1}
                >
                  Terms&Conditions
                </Text>
              </TouchableOpacity>
              <Text style={{ fontSize: 14, flexShrink: 0 }} numberOfLines={1}>
                {" "}
                and{" "}
              </Text>
              <TouchableOpacity
                onPress={() => navigation.navigate("PrivacyPolicy")}
                activeOpacity={0.7}
              >
                <Text
                  style={{
                    color: "#7C4DFF",
                    fontSize: 14,
                    fontWeight: "bold",
                    opacity: 0.8,
                    flexShrink: 0,
                  }}
                  numberOfLines={1}
                >
                  Privacy Policy
                </Text>
              </TouchableOpacity>
            </View>
            <Buttons
              title={isLoading ? "Creating account..." : "Sign up"}
              onPress={handleSignup}
              disabled={isLoading}
              showIcon={false}
              iconColor="#ffffff"
              iconSize={20}
              iconFamily="Ionicons"
            />
            {isLoading && (
              <ActivityIndicator
                size="large"
                color="#010102"
                style={{ marginTop: 14, alignSelf: "center" }}
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
                onPress={google.signIn}
                disabled={socialLoading}
              >
                <Image
                  style={styles.imageto}
                  source={require("../../assets/google.png")}
                />
              </TouchableOpacity>
            </View>
            {socialLoading && (
              <ActivityIndicator
                size="small"
                color="#7C4DFF"
                style={{ marginTop: 14, alignSelf: "center" }}
              />
            )}
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
    </KeyboardAvoidingView>
  );
}
const styles = StyleSheet.create({
  Container: {
    flex: 1,
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
    width: 140,
    height: 120,
    resizeMode: "cover",
  },
  c2: {
    width: "100%",
    backgroundColor: "#fff",
    height: "100%",
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
    marginLeft: 10,
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
