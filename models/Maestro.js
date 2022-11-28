const mongoose = require("mongoose");

const MaestroSchema = new mongoose.Schema({
  nombreUsuario:{
    type: String,
    required: true,
    unique: true,
  },
  nombre: {
    type: String,
    required: false
  },
  foto: {
    type: String,
    required: false
  },
  apellidop: {
    type: String,
    required: false
  },
  apellidom: {
    type: String,
    required: false
  },
  correo: {
    type: String,
    required: false,
    unique: true
  },
  matricula: {
    type: String,
    required: false
  },
  password: {
    type: String,
    required: false
  }
});

module.exports = mongoose.model("Maestro", MaestroSchema);