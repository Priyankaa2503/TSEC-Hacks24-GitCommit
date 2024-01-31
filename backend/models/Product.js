const mongoose = require('mongoose')
const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    desc: {
      type: String,
    },
    status: {
      type: String,
      enum: ["pending", "ongoing", "completed"],
      default: "pending",
    },
    date: {
      type: Date,
    },
    // progress: {
    //   type: Number,
    // },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Product",productSchema)