const mongoose = require("mongoose");

const MaestroSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true
  },
  foto: {
    type: String,
    required: true
  },
  apellidop: {
    type: String,
    required: true
  },
  apellidom: {
    type: String,
    required: true
  },
  correo: {
    type: String,
    required: true,
    unique: true
  },
  matricula: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("Maestro", MaestroSchema);