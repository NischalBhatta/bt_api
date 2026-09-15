import userSchema from "./userSchema.js";

// CReate
export const insertUser = async (userObj) => {
  return await userSchema(userObj).save();
};

// REad
// Update
// Delete
