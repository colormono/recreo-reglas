const mongoose = require('mongoose');
const { Schema } = mongoose;

// definir el modelo del objeto
const userSchema = new Schema({
  userId: String,
  name: String
});

// crear collección si no existe
mongoose.model('users', userSchema);
