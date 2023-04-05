const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
    },
    number: {
      type: Number,
    },
    password: Number,
  },
  { versionKey: false }
);

module.exports = mongoose.model("users", userSchema);
