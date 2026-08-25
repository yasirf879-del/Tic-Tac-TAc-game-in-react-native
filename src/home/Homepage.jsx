import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { BlurView } from "expo-blur";
import styles from "./Homepage_style";
import * as Icon from "@expo/vector-icons";
import { useState } from "react";
import Profile from "../screens/Profile";
export default function Homepage() {
  const [showProfile, setShowProfile] = useState(false);
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [winner, setWinner] = useState(null);
  const [isDraw, setIsDraw] = useState(false);
  const [playerXWins, setPlayerXWins] = useState(0);
  const [playerOWins, setPlayerOWins] = useState(0);
  const [totalGames, setTotalGames] = useState(0);
  const [winningPattern, setWinningPattern] = useState(null);
  const [drawGames, setDrawGames] = useState(0);
  const winningPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

    [0, 4, 8],
    [2, 4, 6],
  ];
  const handleMove = (index) => {
    if (board[index] !== "") {
      return;
    }

    if (winner || isDraw) {
      return;
    }

    const newBoard = [...board];

    newBoard[index] = currentPlayer;

    setBoard(newBoard);

    const gameWinner = checkWinner(newBoard);

    if (gameWinner) {
      setWinner(gameWinner.player);
      setWinningPattern(gameWinner.pattern);
      if (gameWinner.player === "X") {
        setPlayerXWins((prev) => prev + 1);
      } else {
        setPlayerOWins((prev) => prev + 1);
      }
      setTotalGames((prev) => prev + 1);
      return;
    }
    if (!newBoard.includes("")) {
      setIsDraw(true);
      setDrawGames((prev) => prev + 1);
      setTotalGames((prev) => prev + 1);
      return;
    }
    setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
  };
  const checkWinner = (board) => {
    for (const pattern of winningPatterns) {
      const [a, b, c] = pattern;
      if (board[a] !== "" && board[a] === board[b] && board[a] === board[c]) {
        return {
          player: board[a],
          pattern: pattern,
        };
      }
    }
    return null;
  };
  const emptyBoard = () => {
    setBoard(["", "", "", "", "", "", "", "", ""]);
    setWinner(null);
    setIsDraw(false);
    setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
    setWinningPattern(null);
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: 20, flex: 1 }}>
        <StatusBar style="dark" />
        <View style={styles.headercontainer}>
          <Text style={styles.headerText}>Tic Tac Toe</Text>
          <Text style={styles.saloganText}>Classic game</Text>
        </View>

        <View style={styles.playerTurncontainer}>
          <Text style={styles.turnText}>Current turn</Text>
          <Text style={styles.choiceText}>{currentPlayer}</Text>

          <Text>
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
        <View style={styles.gameContainer}>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              style={[
                styles.box,
                winningPattern?.includes(0) && styles.winningBox,
              ]}
              onPress={() => handleMove(0)}
            >
              <Text style={styles.boxText}>{board[0]}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.box,
                winningPattern?.includes(1) && styles.winningBox,
              ]}
              onPress={() => handleMove(1)}
            >
              <Text style={styles.boxText}>{board[1]}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.box,
                winningPattern?.includes(2) && styles.winningBox,
              ]}
              onPress={() => handleMove(2)}
            >
              <Text style={styles.boxText}>{board[2]}</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              style={[
                styles.box,
                winningPattern?.includes(3) && styles.winningBox,
              ]}
              onPress={() => handleMove(3)}
            >
              <Text style={styles.boxText}>{board[3]}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.box,
                winningPattern?.includes(4) && styles.winningBox,
              ]}
              onPress={() => handleMove(4)}
            >
              <Text style={styles.boxText}>{board[4]}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.box,
                winningPattern?.includes(5) && styles.winningBox,
              ]}
              onPress={() => handleMove(5)}
            >
              <Text style={styles.boxText}>{board[5]}</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              style={[
                styles.box,
                winningPattern?.includes(6) && styles.winningBox,
              ]}
              onPress={() => handleMove(6)}
            >
              <Text style={styles.boxText}>{board[6]}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.box,
                winningPattern?.includes(7) && styles.winningBox,
              ]}
              onPress={() => handleMove(7)}
            >
              <Text style={styles.boxText}>{board[7]}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.box,
                winningPattern?.includes(8) && styles.winningBox,
              ]}
              onPress={() => handleMove(8)}
            >
              <Text style={styles.boxText}>{board[8]}</Text>
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity
          style={styles.NEWGAME}
          onPress={() => emptyBoard()}
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
      </ScrollView>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerIcon}>
          <Icon.Ionicons name="home" size={20} color="black" />

          <Text style={styles.footerText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerIcon}>
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

      {showProfile && (
        <View style={styles.overlay}>
          <BlurView intensity={100} tint="dark" style={styles.backdrop} />

          <TouchableOpacity
            style={styles.backdrop}
            activeOpacity={1}
            onPress={() => setShowProfile(false)}
          />

          <Profile onClose={() => setShowProfile(false)} />
        </View>
      )}
    </View>
  );
}
