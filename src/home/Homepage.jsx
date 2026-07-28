import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import styles from "./Homepage_style";
import * as Icon from "@expo/vector-icons";
export default function Homepage() {
  return (
    <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
      <View style={styles.container}>
        <StatusBar style="dark" />
        <View style={styles.headercontainer}>
          <Text style={styles.headerText}>Tic Tac Toe</Text>
          <Text style={styles.saloganText}>Classic game</Text>
        </View>
        <View style={styles.playerTurncontainer}>
          <Text style={styles.turnText}>Current turn</Text>
          <Text style={styles.choiceText}>X</Text>

          <Text style={styles.saloganText}>Player X's turn</Text>
        </View>
        <View style={styles.ScoreContainer}>
          <View style={styles.playercard}>
            <Text>Player X(score)</Text>
            <Text style={styles.scorewinText}>wins:</Text>
            <Text style={styles.scoreloseText}>looses:</Text>
          </View>
          <View style={styles.playercard}>
            <Text>Player Y(score)</Text>
            <Text style={styles.scorewinText}>wins:</Text>
            <Text style={styles.scoreloseText}>looses:</Text>
          </View>
        </View>
        <View style={styles.gameContainer}>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity style={styles.box}></TouchableOpacity>
            <TouchableOpacity style={styles.box}></TouchableOpacity>
            <TouchableOpacity style={styles.box}></TouchableOpacity>
          </View>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity style={styles.box}></TouchableOpacity>
            <TouchableOpacity style={styles.box}></TouchableOpacity>
            <TouchableOpacity style={styles.box}></TouchableOpacity>
          </View>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity style={styles.box}></TouchableOpacity>
            <TouchableOpacity style={styles.box}></TouchableOpacity>
            <TouchableOpacity style={styles.box}></TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity
          style={styles.NEWGAME}
          onPress={() => alert("New Game")}
          activeOpacity={0.7}
        >
          <Icon.Ionicons name="refresh" size={20} color="#ffffff" />
          <Text
            style={{
              color: "#ffffff",
              fontSize: 18,
              fontWeight: "bold",
            }}
          >
            New Game
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerIcon}>
          <Icon.Ionicons name="home" size={20} color="black" />

          <Text style={styles.footerText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerIcon}>
          <Icon.Ionicons name="trophy" size={20} color="black" />

          <Text style={styles.footerText}>Score</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerIcon}>
          <Icon.Ionicons name="person" size={20} color="black" />
          <Text style={styles.footerText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
