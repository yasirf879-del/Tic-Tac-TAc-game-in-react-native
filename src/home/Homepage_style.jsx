import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headercontainer: {
    width: "100%",
    height: 110,
    backgroundColor: "#7C4DFF",
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    fontSize: 30,
    fontWeight: "bold",
    fontFamily: "inter",
    textAlign: "center",
    paddingTop: 20,
    color: "#fff",
  },
  saloganText: {
    color: "#fff",
  },
  playerTurncontainer: {
    width: "90%",
    minHeight: 110,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
    elevation: 2,
    borderRadius: 15,
    borderWidth: 1,
    backgroundColor: "#fff",
    borderColor: "#E0E0E0",
    marginLeft: 20,
  },

  turnStatus: {
    fontSize: 14,
    fontWeight: "600",
    color: "#555",
    textAlign: "center",
    width: "100%",
    paddingHorizontal: 24,
    marginTop: 4,
  },

  choiceText: {
    fontSize: 28,
    fontWeight: "bold",

    textAlign: "center",
    color: "#7C4DFF",
    marginTop: 2,
  },

  turnText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },

  ScoreContainer: {
    width: "100%",
    height: 100,
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 30,
  },

  playercard: {
    width: "40%",
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    elevation: 2,
    borderRadius: 15,
    borderWidth: 1,
    backgroundColor: "#fff",
    borderColor: "#E0E0E0",
  },
  scorewinText: {
    color: "#1a922cb9",
  },
  scoreloseText: {
    color: "#bd2e2e",
  },
  gamesCount: {
    width: "100%",
    height: 50,
    marginTop: 5,

    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  totalGame: {
    width: "40%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    elevation: 2,
    borderRadius: 15,
    borderWidth: 1,
    backgroundColor: "#fff",
    borderColor: "#E0E0E0",
  },
  totalGameText: {
    color: "#1a1010",
  },

  gameContainer: {
    width: "90%",
    height: 260,
    marginTop: 5,
    justifyContent: "center",
    alignItems: "center",
    elevation: 2,
    borderRadius: 15,
    borderWidth: 1,
    backgroundColor: "#fff",
    borderColor: "#ccc",
    marginLeft: 20,
  },

  box: {
    width: 80,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 0.5,
    backgroundColor: "#d9e9eb",
    borderColor: "#4e99cf",
    overflow: "hidden",
  },
  boxText: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#272137",
    textAlign: "center",
  },

  NEWGAME: {
    width: "55%",
    height: 45,
    backgroundColor: "#7C4DFF",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 5,

    flexDirection: "row",
    gap: 8,
    elevation: 3,
  },
  footer: {
    width: "100%",
    height: 80,
    backgroundColor: "#fff",
    justifyContent: "space-around",
    marginTop: 5,
    flexDirection: "row",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#E5E5E5",
  },
  footerText: {
    fontSize: 12,
    fontWeight: "bold",
    paddingBottom: 20,
  },
  footerIcon: {
    alignItems: "center",
    justifyContent: "center",
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },

  blur: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },

  backdrop: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  winningBox: {
    backgroundColor: "#DFF6DD",
    borderWidth: 2,
    borderColor: "#2E7D32",
  },

  activePlayer: {
    borderWidth: 2,
    borderColor: "#7C4DFF",
  },
});
export default styles;
