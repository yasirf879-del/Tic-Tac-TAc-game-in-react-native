import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import * as Icon from "@expo/vector-icons";
import { auth } from "../../firebase.config";

export default function Dashboard() {
  const navigation = useNavigation();
  const userName = auth.currentUser?.displayName || "Player";

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <View style={styles.header}>
        <Text style={styles.headerText}>Tic Tac Toe</Text>
        <Text style={styles.greeting}>Hi, {userName} 👋</Text>
      </View>

      <Text style={styles.subtitle}>Choose how you want to play</Text>

      <TouchableOpacity
        style={styles.card}
        activeOpacity={0.85}
        onPress={() => navigation.navigate("Homepage")}
      >
        <Text style={styles.cardEmoji}>👥</Text>
        <View style={styles.cardTextWrap}>
          <Text style={styles.cardTitle}>Play Friend</Text>
          <Text style={styles.cardDesc}>Challenge a friend on this device</Text>
        </View>
        <Icon.Ionicons name="chevron-forward" size={24} color="#ffffff" />
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.card, styles.aiCard]}
        activeOpacity={0.85}
        onPress={() => navigation.navigate("AIGame")}
      >
        <Text style={styles.cardEmoji}>🤖</Text>
        <View style={styles.cardTextWrap}>
          <Text style={styles.cardTitle}>Play AI</Text>
          <Text style={styles.cardDesc}>Test yourself against the machine</Text>
        </View>
        <Icon.Ionicons name="chevron-forward" size={24} color="#ffffff" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  header: {
    backgroundColor: "#7C4DFF",
    paddingHorizontal: 24,
    paddingTop: 70,
    paddingBottom: 28,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  headerText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#ffffff",
  },
  greeting: {
    fontSize: 16,
    color: "#E8E0FF",
    marginTop: 6,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#555555",
    marginTop: 28,
    marginLeft: 24,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#7C4DFF",
    borderRadius: 20,
    marginHorizontal: 24,
    marginTop: 20,
    padding: 20,
    elevation: 4,
    shadowColor: "#7C4DFF",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  aiCard: {
    backgroundColor: "#00897B",
    shadowColor: "#00897B",
  },
  cardEmoji: {
    fontSize: 40,
    marginRight: 16,
  },
  cardTextWrap: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ffffff",
  },
  cardDesc: {
    fontSize: 13,
    color: "#EDE7F6",
    marginTop: 4,
  },
});
