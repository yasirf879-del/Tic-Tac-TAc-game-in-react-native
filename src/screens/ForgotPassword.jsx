import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert,
  ActivityIndicator,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Buttons, TextInputs } from "../components";
import { auth } from "../../firebase.config";
import { sendPasswordResetEmail } from "firebase/auth";

export default function ForgotPassword() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleReset = () => {
    if (email.trim() === "") {
      Alert.alert("Error", "Email is required.");
      return;
    }
    setIsLoading(true);
    sendPasswordResetEmail(auth, email.trim())
      .then(() => {
        setIsLoading(false);
        Alert.alert("Reset email sent", `A reset link was sent to ${email.trim()}.`, [
          { text: "OK", onPress: () => navigation.navigate("Login") },
        ]);
      })
      .catch((error) => {
        setIsLoading(false);
        Alert.alert("Error", error.message);
      });
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.flex}>
          <ImageBackground
            style={styles.Backimage}
            source={require("../../assets/i.png")}
            resizeMode="cover"
          >
            <Text style={styles.wtext}>Forgot Password?</Text>
            <Text style={styles.ttext}>Enter your email to receive a reset link.</Text>
          </ImageBackground>
          <View style={styles.c2}>
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
            <Buttons
              title={isLoading ? "" : "Send Reset Link"}
              onPress={handleReset}
              showIcon={false}
              iconColor="#ffffff"
              iconSize={20}
              iconFamily="Ionicons"
              disabled={isLoading}
            />
            {isLoading && (
              <ActivityIndicator
                size="small"
                color="#ffffff"
                style={{ position: "absolute", alignSelf: "center", marginTop: 48 }}
              />
            )}
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => navigation.goBack()}
              activeOpacity={0.7}
            >
              <Text style={styles.backText}>Back to Login</Text>
            </TouchableOpacity>
            <StatusBar style="auto" />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flex: {
    flex: 1,
  },
  Backimage: {
    flex: 0.45,
    width: "100%",
  },
  wtext: {
    fontSize: 28,
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
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
  },
  backButton: {
    alignSelf: "center",
    marginTop: 20,
    padding: 8,
  },
  backText: {
    color: "#7C4DFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});