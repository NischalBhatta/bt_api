import TransactionSchema from "./transactionSchema.js";

//insert query
export const insertTransaction = async (userObj) => {
  return await TransactionSchema(userObj).save();
};

//recieve query
export const getAllTransaction = async (userId) => {
  if (!userId) {
    throw new Error("userId is required");
  }
  return await TransactionSchema.find({ userId });
};

//delete query
export const deleteTransaction = async (userId, idsToDelete) => {
  return TransactionSchema.deleteMany({ userId, _id: { $in: idsToDelete } });
};
