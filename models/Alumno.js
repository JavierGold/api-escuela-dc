const { Schema, model } = require("mongoose");

const AlumnoSchema = new Schema({
  nombre: {
    type: String,
    required: false,
  },
  foto: {
    type: String,
    required: false,
  },
  apellidop: {
    type: String,
    required: false,
  },
  apellidom: {
    type: String,
    required: false,
  },
  correo: {
    type: String,
    required: false,
    unique: true,
  },
  matricula: {
    type: String,
    required: false,
  },
 password: {
    type: String,
    required: false,
  },
  carrera: {
    type: String,
    required: false,
  },
  semestre: {
    type: Number,
    required: false,
  },
  group: {
    type: String,
    required: false,
  },
  comentario: {
    type: String,
    required: false,
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
      final:Number
    },
  ],
});

module.exports = model("Alumno", AlumnoSchema);
