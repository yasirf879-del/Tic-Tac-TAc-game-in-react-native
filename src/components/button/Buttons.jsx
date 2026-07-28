import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { Component } from "react";
/***
 * title: string
 * onPress:() => void
 * showIcon: boolean
 * icon: string
 * iconColor: string
 * iconSize: number
 * iconFamily: string
 */
export const Buttons = ({
  title,
  onPress,
  showIcon,
  icon,
  iconColor,
  iconSize,
  iconFamily,
  disabled = false,
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, disabled && { opacity: 0.5 }]}
      onPress={onPress}
      activeOpacity={0.7}
      disabled={disabled}
    >
      <Text style={styles.ButtonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: "80%",
    height: 50,
    backgroundColor: "#7C4DFF",
    borderRadius: 28,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 20,
    opacity: 0.9,
  },
  ButtonText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
