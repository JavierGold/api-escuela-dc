const { Schema, model } = require("mongoose");

const AlumnoSchema = new Schema({
  nombre: {
    type: String,
    required: true,
  },
  foto: {
    type: String,
    required: true,
  },
  apellidop: {
    type: String,
    required: true,
  },
  apellidom: {
    type: String,
    required: true,
  },
  correo: {
    type: String,
    required: true,
    unique: true,
  },
  matricula: {
    type: String,
    required: true,
  },
 password: {
    type: String,
    required: true,
  },
  materias: [
    {
      materiaId: Schema.Types.ObjectId,
      calificaciones: [
        {
          calificacion: Number,
          parcial: Number,
        },
      ],
    },
  ],
});

module.exports = model("Alumno", AlumnoSchema);
