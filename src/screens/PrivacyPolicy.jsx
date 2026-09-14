import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

const SECTIONS = [
  {
    title: "1. Information We Collect",
    body: "When you create an account, we collect your name, email address, and game statistics (games played, wins, losses, draws).",
  },
  {
    title: "2. How We Use Information",
    body: "Your information is used to manage your account, personalize your experience, store your game scores, and improve the application.",
  },
  {
    title: "3. Firebase Services",
    body: "Authentication and user data are managed through Firebase (Google). Firebase's privacy policy governs its handling of data under its service agreement.",
  },
  {
    title: "4. Data Storage",
    body: "Your game scores are stored locally on your device per user account. Removing the app will erase locally stored data.",
  },
  {
    title: "5. Sharing and Disclosure",
    body: "We do not sell or rent your personal information. Data may be shared only when required by law or with your explicit consent.",
  },
  {
    title: "6. Security",
    body: "We take reasonable measures to protect your data during transmission and storage. No method of transmission is 100% secure.",
  },
  {
    title: "7. Your Rights",
    body: "You may request access to, correction of, or deletion of your personal data at any time by contacting us.",
  },
  {
    title: "8. Contact",
    body: "For privacy questions, please contact us through the app's support channels.",
  },
];

export default function PrivacyPolicy() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton} activeOpacity={0.7}>
          <Text style={styles.backText}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Privacy Policy</Text>
      </View>
      <ScrollView contentContainerStyle={styles.content}>
        {SECTIONS.map((section, index) => (
          <View style={styles.section} key={index}>
            <Text style={styles.sectionTitle}>{section.title}</Text>
            <Text style={styles.sectionBody}>{section.body}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 50,
    paddingBottom: 16,
    paddingHorizontal: 20,
    backgroundColor: "#7C4DFF",
  },
  backButton: {
    padding: 6,
  },
  backText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    marginRight: 12,
  },
  headerTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "inter",
  },
  content: {
    padding: 20,
    paddingBottom: 40,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 6,
  },
  sectionBody: {
    fontSize: 14,
    color: "#666",
    lineHeight: 22,
  },
});