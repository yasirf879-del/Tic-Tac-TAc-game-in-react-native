import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: "15%",
    left: "6%",
    width: "88%",
    height: "70%",
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
    marginBottom: 16,
    fontFamily: "inter",
  },
  summaryCard: {
    width: "100%",
    backgroundColor: "#f4f1ff",
    borderRadius: 16,
    paddingVertical: 16,
    marginBottom: 18,
  },
  summaryRow: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  summaryItem: {
    alignItems: "center",
    flex: 1,
  },
  summaryValue: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#7C4DFF",
  },
  summaryLabel: {
    fontSize: 12,
    color: "#999",
    marginTop: 2,
  },
  divider: {
    width: 1,
    height: 30,
    backgroundColor: "#dcd4f7",
  },
  sectionLabel: {
    alignSelf: "flex-start",
    fontSize: 13,
    fontWeight: "700",
    color: "#999",
    textTransform: "uppercase",
    marginBottom: 6,
  },
  playerCard: {
    width: "100%",
    backgroundColor: "#f8f8f8",
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginBottom: 14,
  },
  playerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 6,
  },
  playerName: {
    fontSize: 15,
    color: "#666",
  },
  playerValue: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#333",
  },
  closeButton: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: "auto",
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  closeButtonText: {
    color: "#7C4DFF",
    fontSize: 15,
    fontWeight: "bold",
    marginLeft: 4,
  },
});

export default styles;