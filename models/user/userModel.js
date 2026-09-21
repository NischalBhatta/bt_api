import userSchema from "./userSchema.js";

// CReate
export const insertUser = async (userObj) => {
  return await userSchema(userObj).save();
};

// REad
export const getUserByEmail = (email) => {
  return userSchema.findOne({ email: email });
};
// Update
// Delete
