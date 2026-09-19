import { useState } from "react";
import { Alert } from "react-native";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { GoogleAuthProvider, signInWithCredential } from "firebase/auth";
import { auth } from "../../firebase.config";
import { createSocialUserIfNeeded } from "../manager/authManager";
export function useGoogleLogin() {
  const [loading, setLoading] = useState(false);

  const signIn = async () => {
    try {
      setLoading(true);

      await GoogleSignin.hasPlayServices({
        showPlayServicesUpdateDialog: true,
      });

      const response = await GoogleSignin.signIn();

      // Current Google Sign-In versions return the ID token
      // inside response.data.
      const idToken = response?.data?.idToken;

      if (!idToken) {
        throw new Error("Google did not return an ID token.");
      }

      const credential = GoogleAuthProvider.credential(idToken);

      await signInWithCredential(auth, credential);
      const result = await signInWithCredential(auth, credential);

      await createSocialUserIfNeeded(result.user);

      Alert.alert("Success", "You are now logged in!");
    } catch (error) {
      Alert.alert("Google Sign-in Error:", error);

      if (error?.code === "SIGN_IN_CANCELLED") {
        return;
      }

      Alert.alert(
        "Google Sign-in Error",
        error?.message || "Something went wrong.",
      );
    } finally {
      setLoading(false);
    }
  };

  return { signIn, loading };
}
