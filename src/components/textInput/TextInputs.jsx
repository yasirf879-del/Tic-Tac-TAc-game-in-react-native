import { StyleSheet, View, TextInput } from "react-native";
import React from "react";
import * as Icon from "@expo/vector-icons";
/***
 * placeholder: string
 * placeholderTextColor: string
 * secureTextEntry: boolean
 * showIcon: boolean
 * icon: string
 * iconColor: string
 * iconSize: number
 * iconFamily: string
 */
export const TextInputs = ({
  placeholder,
  placeholderTextColor,
  secureTextEntry = false,
  value = "",
  onChangeText = () => {},
  showIcon = false,
  icon,
  iconColor,
  iconSize,
}) => {
  return (
    <View style={styles.inputContainer}>
      {showIcon && (
        <Icon.MaterialIcons name={icon} size={iconSize} color={iconColor} />
      )}
      <TextInput
        style={styles.inputtext}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        secureTextEntry={secureTextEntry}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    backgroundColor: "#f2f2f2",
    marginLeft: 15,
    borderRadius: 10,
    borderColor: "#d6d0d0",
    borderWidth: 0.5,
    paddingLeft: 10,
    borderColor: "#d6d0d0",
    paddingHorizontal: 10,
  },
  inputtext: {
    flex: 1,
    height: 50,
    paddingLeft: 10,
    fontSize: 16,
    fontWeight: "bold",
  },
});
