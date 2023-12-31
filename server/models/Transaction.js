import mongoose from "mongoose";

const TransactionSchema = new mongoose.Schema(
  {
    userId: String,
    cost: String, //number
    products: {
      type: [mongoose.Types.ObjectId],
      of: Number
    }
  },
  { timestamps: true }
);

const Transaction = mongoose.model("Transaction", TransactionSchema);
export default Transaction;

// No validation apply - official project musst be required
