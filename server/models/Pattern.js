/**
 * Definir el modelo del objeto pattern
 *
 * mode: String (play o work)
 * duration: Number (time)
 * colors: [String] (paleta)
 * date: { type: Date, default: Date.now }
 *
 * docs: https://mongoosejs.com/docs/guide.html
 */
const mongoose = require('mongoose');
const { Schema } = mongoose;
const colorSchema = require('./Color');

const patternSchema = new Schema({
  _user: { type: Schema.Types.ObjectId, ref: 'User' },
  mode: { type: String, default: 'play' },
  duration: { type: Number, default: 1000 },
  colors: [colorSchema],
  date: { type: Date, default: Date.now },
  lastTimeUsed: Date
});

// crear collección si no existe
mongoose.model('patterns', patternSchema);
