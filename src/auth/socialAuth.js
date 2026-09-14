import { useEffect, useState } from "react";
import { Alert } from "react-native";
import * as Google from "expo-auth-session/providers/google";
import * as Facebook from "expo-facebook";
import {
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithCredential,
} from "firebase/auth";
import { auth } from "../../firebase.config";

const GOOGLE_RAW_CONFIG = {
  androidClientId: process.env.EXPO_PUBLIC_GOOGLE_ANDROID_CLIENT_ID,
  iosClientId: process.env.EXPO_PUBLIC_GOOGLE_IOS_CLIENT_ID,
  webClientId: process.env.EXPO_PUBLIC_GOOGLE_WEB_CLIENT_ID,
};

const GOOGLE_CONFIG = {
  androidClientId:
    GOOGLE_RAW_CONFIG.androidClientId || "MISSING_ANDROID_CLIENT_ID",
  iosClientId: GOOGLE_RAW_CONFIG.iosClientId || "MISSING_IOS_CLIENT_ID",
  webClientId: GOOGLE_RAW_CONFIG.webClientId || "MISSING_WEB_CLIENT_ID",
};

const FACEBOOK_APP_ID = process.env.EXPO_PUBLIC_FACEBOOK_APP_ID;

const isGoogleConfigured = () =>
  !!(
    GOOGLE_RAW_CONFIG.androidClientId ||
    GOOGLE_RAW_CONFIG.iosClientId ||
    GOOGLE_RAW_CONFIG.webClientId
  );

export function useGoogleLogin() {
  const [request, response, promptAsync] = Google.useAuthRequest(GOOGLE_CONFIG);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (response?.type !== "success") return;
    setLoading(true);
    const { idToken, accessToken } = response.authentication || {};
    if (!idToken && !accessToken) {
      setLoading(false);
      Alert.alert("Google Sign-in failed", "No credentials were returned.");
      return;
    }
    const credential = GoogleAuthProvider.credential(idToken, accessToken);
    signInWithCredential(auth, credential)
      .catch((error) => {
        Alert.alert("Google Sign-in Error", error.message);
      })
      .finally(() => setLoading(false));
  }, [response]);

  const signIn = () => {
    if (!isGoogleConfigured()) {
      Alert.alert(
        "Not configured",
        "Add Google OAuth client IDs to your .env (EXPO_PUBLIC_GOOGLE_*).",
      );
      return;
    }
    promptAsync();
  };

  return { signIn, loading };
}

export function useFacebookLogin() {
  const [loading, setLoading] = useState(false);

  const signIn = async () => {
    if (!FACEBOOK_APP_ID) {
      Alert.alert(
        "Not configured",
        "Add your Facebook App ID to .env (EXPO_PUBLIC_FACEBOOK_APP_ID).",
      );
      return;
    }
    try {
      setLoading(true);
      await Facebook.initializeAsync({ appId: FACEBOOK_APP_ID });
      const result = await Facebook.loginAsync({
        permissions: ["public_profile", "email"],
      });
      if (result.type === "success") {
        const credential = FacebookAuthProvider.credential(result.token);
        await signInWithCredential(auth, credential);
      }
    } catch (error) {
      Alert.alert("Facebook Sign-in Error", error.message);
    } finally {
      setLoading(false);
    }
  };

  return { signIn, loading };
}