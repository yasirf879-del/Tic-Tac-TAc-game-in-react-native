import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
} from "react-native";

import { useState } from "react";
import styles from "./Profile-style";
import { useNavigation } from "@react-navigation/native";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase.config";
export default function Profile({ onClose }) {
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false);
  const user = auth.currentUser;
  const signoutUser = async () => {
    try {
      setIsLoading(true);
      await signOut(auth);
      setIsLoading(false);
      navigation.replace("Login");
    } catch (error) {
      setIsLoading(false);
      Alert.alert("Error", error.message);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.grabber} />
      <Text style={styles.title}>Profile</Text>

      <View style={styles.row}>
        <Text style={styles.label}>Name:</Text>
        <Text style={styles.value}>{user?.displayName || "Player"}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Email:</Text>
        <Text style={styles.value}>{user?.email || "—"}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Total games:</Text>
        <Text style={styles.value}>0</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Win:</Text>
        <Text style={styles.value}>0</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Lose:</Text>
        <Text style={styles.value}>0</Text>
      </View>

      <TouchableOpacity
        style={styles.logoutButton}
        onPress={signoutUser}
        disabled={isLoading}
        activeOpacity={0.7}
      >
        {isLoading ? (
          <ActivityIndicator size="small" color="#ffffff" />
        ) : (
          <Text style={styles.logoutButtonText}>Logout</Text>
        )}
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.closeButton}
        onPress={onClose}
        activeOpacity={0.7}
      >
        <Text style={styles.closeButtonText}>Close</Text>
      </TouchableOpacity>
    </View>
  );
}
