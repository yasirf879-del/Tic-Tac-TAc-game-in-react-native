import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import * as Icon from "@expo/vector-icons";

export default function AIGame() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <View style={styles.headercontainer}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
          activeOpacity={0.7}
        >
          <Icon.Ionicons name="arrow-back" size={24} color="#ffffff" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Play with Bot</Text>
        <Text style={styles.saloganText}>Coming soon</Text>
      </View>

      <View style={styles.body}>
        <Text style={styles.emoji}>🤖</Text>
        <Text style={styles.title}>Bot mode is coming soon</Text>
        <Text style={styles.subtitle}>
          The AI opponent is not ready yet. Play with a friend in the meantime!
        </Text>

        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.8}
          onPress={() => navigation.goBack()}
        >
          <Icon.Ionicons name="arrow-back" size={20} color="#ffffff" />
          <Text style={styles.buttonText}>Back to Dashboard</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  headercontainer: {
    width: "100%",
    height: 110,
    backgroundColor: "#00897B",
    justifyContent: "center",
    alignItems: "center",
  },
  backButton: {
    position: "absolute",
    left: 16,
    top: 40,
  },
  headerText: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    paddingTop: 20,
  },
  saloganText: {
    color: "#fff",
    marginTop: 4,
  },
  body: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 32,
  },
  emoji: {
    fontSize: 64,
    marginBottom: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#1A1A1A",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 15,
    color: "#777777",
    textAlign: "center",
    marginTop: 10,
    lineHeight: 22,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    backgroundColor: "#7C4DFF",
    borderRadius: 25,
    paddingVertical: 14,
    paddingHorizontal: 24,
    marginTop: 32,
    elevation: 3,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
});