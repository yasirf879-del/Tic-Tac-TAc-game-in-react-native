import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: "25%",
    left: "7.5%",
    width: "85%",
    height: "50%",
    backgroundColor: "#ffffff",
    borderRadius: 30,
    paddingVertical: 20,
    paddingHorizontal: 24,
    alignItems: "center",
    elevation: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 12,
  },
  grabber: {
    width: 40,
    height: 4,
    borderRadius: 2,
    backgroundColor: "#d6d0d0",
    marginTop: 2,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
    marginTop: 14,
    marginBottom: 8,
    fontFamily: "inter",
  },
  row: {
    flexDirection: "row",
    width: "100%",
    marginTop: 10,
    paddingVertical: 6,
    borderBottomWidth: 0.5,
    borderBottomColor: "#f0f0f0",
  },
  label: {
    width: 110,
    fontSize: 15,
    fontWeight: "600",
    color: "#666",
  },
  value: {
    flex: 1,
    fontSize: 15,
    color: "#333",
  },
  logoutButton: {
    width: "60%",
    height: 46,
    backgroundColor: "#c62828",
    borderRadius: 23,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 18,
    elevation: 3,
    shadowColor: "#c62828",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
  },
  logoutButtonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
  closeButton: {
    padding: 8,
  },
  closeButtonText: {
    color: "#7C4DFF",
    fontSize: 15,
    fontWeight: "bold",
  },
});

export default styles;
