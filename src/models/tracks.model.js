const mongoose = require("mongoose");

const TrackSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    album: {
      type: String,
    },
    cover: {
      type: String,
      validate: {
        validator: (req) => {
          return true;
        },
        message: "ERROR_URL",
      },
      artist: {
        name: {
          type: String,
        },
        nickname: {
          type: String,
        },
        nationality: {
          type: String,
        },
      },
    },
    duration: {
      start: {
        type: Number,
      },
      end: {
        type: Number,
      },
    },
    mediaId: {
      //string que conforma un patron de caracteres
      type: mongoose.Types.ObjectId,
    },
  },
  {
    timestamps: true, //TODO createat, updateat
    versionKey: false,
  }
);

// Exportar el modelo, primer parametro la tabla y luego el esquema
module.exports = mongoose.model("tracks", TrackSchema);
