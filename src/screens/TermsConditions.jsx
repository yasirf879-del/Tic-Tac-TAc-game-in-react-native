import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

const SECTIONS = [
  {
    title: "1. Acceptance of Terms",
    body: "By creating an account and using this application, you agree to be bound by these Terms & Conditions. If you do not agree, please do not use the app.",
  },
  {
    title: "2. User Accounts",
    body: "You are responsible for maintaining the confidentiality of your account credentials. You must provide accurate information when registering and keep it up to date.",
  },
  {
    title: "3. Acceptable Use",
    body: "You agree not to misuse the application, attempt to disrupt its services, or use it for any unlawful purpose. Cheating, bots, or any automated play is prohibited.",
  },
  {
    title: "4. Intellectual Property",
    body: "All content, design, and code within the application are the property of the developer and are protected by applicable intellectual property laws.",
  },
  {
    title: "5. Termination",
    body: "We reserve the right to suspend or terminate accounts that violate these terms or engage in abusive behavior, at our sole discretion.",
  },
  {
    title: "6. Liability",
    body: "The application is provided 'as is' without warranties of any kind. We are not liable for any damages arising from your use of the application.",
  },
  {
    title: "7. Changes to Terms",
    body: "We may update these terms from time to time. Continued use of the app after changes means you accept the revised terms.",
  },
];

export default function TermsConditions() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton} activeOpacity={0.7}>
          <Text style={styles.backText}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Terms & Conditions</Text>
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