import TransactionSchema from "./transactionSchema.js";

//insert query
export const insertTransaction = async (userObj) => {
  return await TransactionSchema(userObj).save();
};
