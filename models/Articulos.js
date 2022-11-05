const { Schema, model } = require("mongoose");

const ArticuloSchema = Schema({
  titulo: { type: String, required: true },
  contenido: { type: String, required: true },
  fecha: { type: Date, default: Date.now },
  imagen: { type: Date, default: "default.png" },
  timestamps: {
    createdAt: "created_at", // Use `created_at` to store the created date
    updatedAt: "updated_at", // and `updated_at` to store the last updated date
  },
});

module.exports = model("Articulo", ArticuloSchema, "articulos");
