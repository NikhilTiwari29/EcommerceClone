const bcrypt = require('bcrypt');

const saltRounds = 10;

// Hash a password
const hashPassword = async (password) => {
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  return hashedPassword;
};

// Compare a plain text password with a hashed password
const comparePassword = async (plainPassword, hashedPassword) => {
  const isMatch = await bcrypt.compare(plainPassword, hashedPassword);
  return isMatch;
};

module.exports = {
  hashPassword,
  comparePassword,
};
