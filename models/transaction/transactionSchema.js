import mongoose from "mongoose";

const transactionSchema = mongoose.Schema(
  {
    type: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
      index: 1,
      required: true,
    },
    amount: {
      type: String,
      required: true,
    },
    tdate: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model("Transaction", transactionSchema);
