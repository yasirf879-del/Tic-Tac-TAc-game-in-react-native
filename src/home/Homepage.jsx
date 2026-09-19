import {
  View,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  Alert,
} from "react-native";
import { BlurView } from "expo-blur";
import { StatusBar } from "expo-status-bar";
import styles from "./Homepage_style";
import * as Icon from "@expo/vector-icons";
import { useState, useEffect } from "react";
import Profile from "../screens/Profile";
import ScoreBoard from "../screens/ScoreBoard";

import { handleMove, emptyBoard } from "./gameLogic";
import { auth, db } from "../../firebase.config";
import { doc, onSnapshot } from "firebase/firestore";
import { saveGameResult } from "../manager/authManager";
import { useNavigation } from "@react-navigation/native";
import HomeComponent from "../screens/HomeComponent";
export default function Homepage() {
  const user = auth.currentUser;
  const playerXName = user?.displayName || "Player X";
  const { width } = useWindowDimensions();
  const boxSize = Math.floor((width * 0.82) / 3.6);
  const boardHeight = boxSize * 3 + 24;
  const navigation = useNavigation();

  const [showHome, setShowHome] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [showScore, setShowScore] = useState(false);
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [winner, setWinner] = useState(null);
  const [isDraw, setIsDraw] = useState(false);
  const [playerXWins, setPlayerXWins] = useState(0);
  const [playerOWins, setPlayerOWins] = useState(0);
  const [totalGames, setTotalGames] = useState(0);
  const [winningPattern, setWinningPattern] = useState(null);
  const [drawGames, setDrawGames] = useState(0);

  useEffect(() => {
    if (!user) return;

    const userRef = doc(db, "users", user.uid);
    const unsubscribe = onSnapshot(userRef, (snapshot) => {
      if (!snapshot.exists()) return;
      const data = snapshot.data();
      setPlayerXWins(data.playerXWins || 0);
      setPlayerOWins(data.playerOWins || 0);
      setTotalGames(data.totalGames || 0);
      setDrawGames(data.drawGames || 0);
    });

    return () => unsubscribe();
  }, [user]);

  const onHandleMove = async (index) => {
    const result = handleMove({
      index,
      board,
      currentPlayer,
      winner,
      isDraw,
      setBoard,
      setCurrentPlayer,
      setWinner,
      setWinningPattern,
      setIsDraw,
      setPlayerXWins,
      setPlayerOWins,
      setTotalGames,
      setDrawGames,
    });
    if (!result || !user) {
      return;
    }

    try {
      await saveGameResult(user, result.winner, playerXName);
    } catch (error) {
      Alert.alert("Error", error.message);
    }
  };

  const onNewGame = () => {
    emptyBoard({
      currentPlayer,
      setBoard,
      setWinner,
      setIsDraw,
      setCurrentPlayer,
      setWinningPattern,
    });
  };

  const renderBox = (index) => {
    const isWinnerCell = winningPattern?.includes(index);
    return (
      <TouchableOpacity
        key={index}
        style={[
          styles.box,
          { width: boxSize, height: boxSize },
          isWinnerCell && styles.winningBox,
        ]}
        onPress={() => onHandleMove(index)}
        activeOpacity={0.7}
      >
        <Text
          style={[
            styles.boxText,
            { fontSize: Math.max(24, Math.floor(boxSize / 3)) },
          ]}
        >
          {board[index]}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <View style={styles.headercontainer}>
        <Text style={styles.headerText}>Tic Tac Toe</Text>
        <Text style={styles.saloganText}>Classic game</Text>
      </View>

      <View style={styles.playerTurncontainer}>
        <Text style={styles.turnText}>Current turn</Text>
        <Text style={styles.choiceText}>{currentPlayer}</Text>

        <Text style={styles.turnStatus} numberOfLines={2}>
          {winner
            ? `🎉 Player ${winner} wins!`
            : isDraw
              ? `😐 It's a draw!`
              : `Player ${currentPlayer}'s turn`}
        </Text>
      </View>

      <View style={styles.ScoreContainer}>
        <View
          style={[
            styles.playercard,
            currentPlayer === "X" ? styles.activePlayer : null,
          ]}
        >
          <Text>Player X(score)</Text>
          <Text style={styles.scorewinText}>wins: {playerXWins}</Text>
          <Text style={styles.scoreloseText}>losses: {playerOWins}</Text>
        </View>
        <View
          style={[
            styles.playercard,
            currentPlayer === "O" ? styles.activePlayer : null,
          ]}
        >
          <Text>Player O(score)</Text>
          <Text style={styles.scorewinText}>wins: {playerOWins}</Text>
          <Text style={styles.scoreloseText}>losses: {playerXWins}</Text>
        </View>
      </View>
      <View style={styles.gamesCount}>
        <View style={styles.totalGame}>
          <Text style={styles.totalGameText}>Total games : {totalGames}</Text>
        </View>
        <View style={styles.totalGame}>
          <Text style={styles.totalGameText}>Draw games : {drawGames}</Text>
        </View>
      </View>

      <View style={[styles.gameContainer, { height: boardHeight }]}>
        <View style={{ flexDirection: "row" }}>
          {renderBox(0)}
          {renderBox(1)}
          {renderBox(2)}
        </View>
        <View style={{ flexDirection: "row" }}>
          {renderBox(3)}
          {renderBox(4)}
          {renderBox(5)}
        </View>
        <View style={{ flexDirection: "row" }}>
          {renderBox(6)}
          {renderBox(7)}
          {renderBox(8)}
        </View>
      </View>

      <TouchableOpacity
        style={styles.NEWGAME}
        onPress={() => onNewGame()}
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

      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.footerIcon}
          onPress={() => setShowHome(true)}
        >
          <Icon.Ionicons name="home" size={20} color="black" />

          <Text style={styles.footerText}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.footerIcon}
          onPress={() => setShowScore(true)}
        >
          <Icon.Ionicons name="trophy" size={20} color="black" />

          <Text style={styles.footerText}>Score</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.footerIcon}
          onPress={() => setShowProfile(true)}
        >
          <Icon.Ionicons name="person" size={20} color="black" />
          <Text style={styles.footerText}>Profile</Text>
        </TouchableOpacity>
      </View>
      {showHome && (
        <View style={styles.overlay}>
          <BlurView intensity={100} tint="dark" style={styles.backdrop} />

          <TouchableOpacity
            style={styles.backdrop}
            activeOpacity={1}
            onPress={() => setShowHome(false)}
          />
          <HomeComponent
            onClose={() => setShowHome(false)}
            onConfirm={() => {
              setShowHome(false);
              navigation.navigate("Dashboard");
            }}
          />
        </View>
      )}

      {showProfile && (
        <View style={styles.overlay}>
          <BlurView intensity={100} tint="dark" style={styles.backdrop} />

          <TouchableOpacity
            style={styles.backdrop}
            activeOpacity={1}
            onPress={() => setShowProfile(false)}
          />

          <Profile
            onClose={() => setShowProfile(false)}
            totalGames={totalGames}
            playerXWins={playerXWins}
            playerOWins={playerOWins}
            drawGames={drawGames}
          />
        </View>
      )}

      {showScore && (
        <View style={styles.overlay}>
          <BlurView intensity={100} tint="dark" style={styles.backdrop} />

          <TouchableOpacity
            style={styles.backdrop}
            activeOpacity={1}
            onPress={() => setShowScore(false)}
          />

          <ScoreBoard
            onClose={() => setShowScore(false)}
            totalGames={totalGames}
            playerXWins={playerXWins}
            playerOWins={playerOWins}
            drawGames={drawGames}
          />
        </View>
      )}
    </View>
  );
}
