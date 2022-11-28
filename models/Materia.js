const { Schema, model } = require("mongoose");

const MateriaSchema = new Schema({
  nombre: {
    type: String,
    required: false,
  },
  foto: {
    type: String,
    required: false,
  },
  descripcion: {
    type: String,
    required: false,
  },
  dia: {
    type: String,
  },
  hora: {
    type: String,
  },
  maestroId: Schema.Types.ObjectId,
});

module.exports = model("Materia", MateriaSchema);
