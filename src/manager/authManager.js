import {
  doc,
  setDoc,
  collection,
  updateDoc,
  increment,
  getDoc,
} from "firebase/firestore";

import { db } from "../../firebase.config";

async function registerUser(user, fullName) {
  await setDoc(doc(db, "users", user.uid), {
    fullName: fullName,
    email: user.email,
    totalGames: 0,
    playerXWins: 0,
    playerOWins: 0,
    drawGames: 0,
    createdAt: new Date(),
  });
}

async function createSocialUserIfNeeded(user) {
  const userRef = doc(db, "users", user.uid);
  const userSnapshot = await getDoc(userRef);

  // User already exists — don't overwrite their statistics.
  if (userSnapshot.exists()) {
    return;
  }

  // New Google/Facebook user
  await setDoc(userRef, {
    fullName: user.displayName || "Google User",
    email: user.email || "",
    totalGames: 0,
    playerXWins: 0,
    playerOWins: 0,
    drawGames: 0,
    createdAt: new Date(),
  });
}

async function saveGameResult(user, winner, playerXName) {
  const gameRef = doc(collection(db, "users", user.uid, "games"));

  await setDoc(gameRef, {
    winner: winner,
    playerX: playerXName,
    playerO: "Guest",
    playedAt: new Date(),
  });

  const userRef = doc(db, "users", user.uid);

  const statsUpdate = {
    totalGames: increment(1),
  };

  if (winner === "X") {
    statsUpdate.playerXWins = increment(1);
  } else if (winner === "O") {
    statsUpdate.playerOWins = increment(1);
  } else if (winner === null) {
    statsUpdate.drawGames = increment(1);
  }

  await updateDoc(userRef, statsUpdate);
}

export { registerUser, createSocialUserIfNeeded, saveGameResult };
