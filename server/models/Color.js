/**
 * Definir las posibles combinaciones de colores
 * Posibilidad de usar gradientes
 *
 * mode: Number (play o work)
 * duration: Number (time)
 * colors: [String] (paleta)
 * date: { type: Date, default: Date.now }
 *
 * docs: https://mongoosejs.com/docs/guide.html
 */
const mongoose = require('mongoose');
const { Schema } = mongoose;

const colorSchema = new Schema({
  r: Number,
  g: Number,
  b: Number
});

module.exports = colorSchema;

// crear collección si no existe
//mongoose.model('colors', colorSchema);
