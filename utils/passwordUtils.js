import bcrypt from "bcryptjs";

export const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  const hashed = await bcrypt.hash(password, salt);
  return hashed;
};

export const comparePassword = async (passwordInput, hashedPassword) => {
  const isMatch = await bcrypt.compare(passwordInput, hashedPassword);
  return isMatch;
};
