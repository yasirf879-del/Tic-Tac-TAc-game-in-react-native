import { StyleSheet, View, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
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
  autoCapitalize,
  autoComplete,
  keyboardType,
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <View style={styles.inputContainer}>
      {showIcon && (
        <Icon.MaterialIcons name={icon} size={iconSize} color={iconColor} />
      )}
      <TextInput
        style={styles.inputtext}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        secureTextEntry={secureTextEntry && !isPasswordVisible}
        value={value}
        onChangeText={onChangeText}
        autoCapitalize={autoCapitalize}
        autoComplete={autoComplete}
        keyboardType={keyboardType}
      />
      {secureTextEntry && (
        <TouchableOpacity
          onPress={() => setIsPasswordVisible((prev) => !prev)}
          activeOpacity={0.7}
          style={styles.eyeButton}
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
        >
          <Icon.MaterialIcons
            name={isPasswordVisible ? "visibility-off" : "visibility"}
            size={22}
            color="#7C4DFF"
          />
        </TouchableOpacity>
      )}
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
  eyeButton: {
    paddingHorizontal: 6,
    justifyContent: "center",
    alignItems: "center",
  },
});
