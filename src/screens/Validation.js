const getSignupValidationError = (
  fullname,
  email,
  password,
  confirmedPassword,
  isChecked,
) => {
  if (fullname.trim() === "") {
    return "Full name is required.";
  }

  const normalizedEmail = email.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (normalizedEmail === "") {
    return "Email is required.";
  }

  if (!emailRegex.test(normalizedEmail)) {
    return "Enter a valid email address.";
  }

  if (password.length < 8) {
    return "Password must be at least 8 characters.";
  }

  if (!/[A-Z]/.test(password)) {
    return "Password must contain at least one uppercase letter.";
  }

  if (!/[a-z]/.test(password)) {
    return "Password must contain at least one lowercase letter.";
  }

  if (!/[0-9]/.test(password)) {
    return "Password must contain at least one number.";
  }

  if (!/[!@#$%^&*]/.test(password)) {
    return "Password must contain at least one special character.";
  }

  if (confirmedPassword === "") {
    return "Please confirm your password.";
  }

  if (password !== confirmedPassword) {
    return "Passwords do not match.";
  }

  if (!isChecked) {
    return "Please accept the Terms & Conditions.";
  }

  return null;
};

export default getSignupValidationError;
