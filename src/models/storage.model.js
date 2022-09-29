const mongoose = require("mongoose");

const StorageSchema = new mongoose.Schema(
  {
    url: {
      type: String,
    },
    filename: {
      type: String,
    },
  },
  {
    timestamps: true, //TODO createat, updateat
    versionKey: false,
  }
);

// Exportar el modelo, primer parametro la tabla y luego el esquema
module.exports = mongoose.model("storage", StorageSchema);
