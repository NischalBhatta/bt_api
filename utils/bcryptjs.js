import bcrypt from "bcryptjs";

export const hashPassword = (plainPassword) => {
  return bcrypt.hashSync(plainPassword);
};

export const comparePassword = (plainPassword, hashPassword) => {
  return bcrypt.compareSync(plainPassword, hashPassword);
};
