import { View, Text, TouchableOpacity } from "react-native";
import styles from "./ScoreBoard-style";
import * as Icon from "@expo/vector-icons";

export default function ScoreBoard({
  onClose,
  playerXWins = 0,
  playerOWins = 0,
  totalGames = 0,
  drawGames = 0,
}) {
  const totalWins = playerXWins + playerOWins;
  const totalLosses = Math.max(totalGames - totalWins - drawGames, 0);
  const xWinRate =
    totalGames > 0 ? Math.round((playerXWins / totalGames) * 100) : 0;
  const oWinRate =
    totalGames > 0 ? Math.round((playerOWins / totalGames) * 100) : 0;

  return (
    <View style={styles.container}>
      <View style={styles.grabber} />
      <Text style={styles.title}>Score Board</Text>

      <View style={styles.summaryCard}>
        <View style={styles.summaryRow}>
          <View style={styles.summaryItem}>
            <Text style={styles.summaryValue}>{totalGames}</Text>
            <Text style={styles.summaryLabel}>Games</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.summaryItem}>
            <Text style={styles.summaryValue}>{totalWins}</Text>
            <Text style={styles.summaryLabel}>Wins</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.summaryItem}>
            <Text style={styles.summaryValue}>{drawGames}</Text>
            <Text style={styles.summaryLabel}>Draws</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.summaryItem}>
            <Text style={styles.summaryValue}>{totalLosses}</Text>
            <Text style={styles.summaryLabel}>Losses</Text>
          </View>
        </View>
      </View>

      <Text style={styles.sectionLabel}>Player X</Text>
      <View style={styles.playerCard}>
        <View style={styles.playerRow}>
          <Text style={styles.playerName}>Wins</Text>
          <Text style={styles.playerValue}>{playerXWins}</Text>
        </View>
        <View style={styles.playerRow}>
          <Text style={styles.playerName}>Win rate</Text>
          <Text style={styles.playerValue}>{xWinRate}%</Text>
        </View>
      </View>

      <Text style={styles.sectionLabel}>Player O</Text>
      <View style={styles.playerCard}>
        <View style={styles.playerRow}>
          <Text style={styles.playerName}>Wins</Text>
          <Text style={styles.playerValue}>{playerOWins}</Text>
        </View>
        <View style={styles.playerRow}>
          <Text style={styles.playerName}>Win rate</Text>
          <Text style={styles.playerValue}>{oWinRate}%</Text>
        </View>
      </View>

      <TouchableOpacity
        style={styles.closeButton}
        onPress={onClose}
        activeOpacity={0.7}
      >
        <Icon.Ionicons name="close" size={18} color="#7C4DFF" />
        <Text style={styles.closeButtonText}>Close</Text>
      </TouchableOpacity>
    </View>
  );
}
