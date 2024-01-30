const mongoose = require('mongoose')
const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    resetPasswordToken: {
      type: String,
    },
    resetPasswordExpires: {
      type: Date,
    },
    // isAdmin: {
    //   type: Boolean,
    //   default: false
    // }
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
module.exports = mongoose.model("User",userSchema)