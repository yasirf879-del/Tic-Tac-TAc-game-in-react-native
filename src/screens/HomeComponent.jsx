import { View, Text, TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";
export default function HomeComponent({ onClose, onConfirm }) {
  return (
    <View style={styles.container}>
      <View style={styles.confirmBox}>
        <Text style={styles.confirmTitle}>Are you sure?</Text>

        <Text style={styles.confirmMessage}>
          Do you want to go back to the Dashboard?
        </Text>
        <View style={styles.confirmButtons}>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={onClose}
            activeOpacity={0.7}
          >
            <Text style={styles.buttonText}>Close</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.confirmButton}
            onPress={onConfirm}
            activeOpacity={0.7}
          >
            <Text style={styles.buttonText}>Confirm</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: "35%",
    left: "7.5%",
    width: "85%",
    height: "30%",
    backgroundColor: "#ffffff",
    borderRadius: 30,
    paddingVertical: 20,
    paddingHorizontal: 24,
    alignItems: "center",
    justifyContent: "center",
    elevation: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 12,
  },
  confirmBox: {
    width: "80%",
    backgroundColor: "#ffffff",
    borderRadius: 20,
    padding: 25,
    alignItems: "center",
  },

  confirmTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },

  confirmMessage: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 25,
  },

  confirmButtons: {
    flexDirection: "row",
    gap: 12,
  },

  closeButton: {
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 10,
    backgroundColor: "#777777",
  },

  confirmButton: {
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 10,
    backgroundColor: "#000000",
  },

  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
