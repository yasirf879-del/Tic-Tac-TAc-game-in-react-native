import AsyncStorage from "@react-native-async-storage/async-storage";

const getKey = (email) => `@tictactoe_stats_${email || "guest"}`;

const defaultStats = {
  playerXWins: 0,
  playerOWins: 0,
  totalGames: 0,
  drawGames: 0,
};

export const getUserStats = async (email) => {
  try {
    const raw = await AsyncStorage.getItem(getKey(email));
    return raw ? { ...defaultStats, ...JSON.parse(raw) } : { ...defaultStats };
  } catch (error) {
    return { ...defaultStats };
  }
};

export const saveUserStats = async (email, stats) => {
  try {
    await AsyncStorage.setItem(getKey(email), JSON.stringify(stats));
  } catch (error) {
    // ignore storage write errors
  }
};