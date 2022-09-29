const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    age: {
      type: Number,
    },
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
    },
    role: {
      type: ["user", "admin"],
      default: "user",
    },
  },
  {
    timestamps: true, //TODO createat, updateat
    versionKey: false,
  }
);

// Exportar el modelo, primer parametro la tabla y luego el esquema
module.exports = mongoose.model("users", UserSchema);
