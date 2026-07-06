import { Alert, trim } from "react-native";
const validateForm = (
  fullname,
  email,
  password,
  confirmedPassword,
  isChecked,
) => {
  // Full Name
  if (fullname.trim() === "") {
    Alert.alert("Error", "Full Name is required.");
    return;
  }

  // Email
  const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

  if (email.trim() === "") {
    Alert.alert("Error", "Email is required.");
    return;
  }

  if (!emailRegex.test(email)) {
    Alert.alert("Invalid Email", "Please enter a valid Gmail address.");
    return;
  }

  // Password
  if (password.length < 8) {
    Alert.alert("Weak Password", "Password must be at least 8 characters.");
    return;
  }

  if (!/[A-Z]/.test(password)) {
    Alert.alert(
      "Weak Password",
      "Password must contain at least one uppercase letter.",
    );
    return;
  }

  if (!/[a-z]/.test(password)) {
    Alert.alert(
      "Weak Password",
      "Password must contain at least one lowercase letter.",
    );
    return;
  }

  if (!/[0-9]/.test(password)) {
    Alert.alert("Weak Password", "Password must contain at least one number.");
    return;
  }

  if (!/[!@#$%^&*]/.test(password)) {
    Alert.alert(
      "Weak Password",
      "Password must contain at least one special character.",
    );
    return;
  }

  // Confirm Password

  if (confirmedPassword === "") {
    Alert.alert("Error", "Please confirm your password.");
    return;
  }

  if (password !== confirmedPassword) {
    Alert.alert("Error", "Passwords do not match.");
    return;
  }

  // Checkbox

  if (!isChecked) {
    Alert.alert("Terms & Conditions", "Please accept the Terms & Conditions.");
    return;
  }

  Alert.alert("Success", "Account Created Successfully!");
};
export default validateForm;
