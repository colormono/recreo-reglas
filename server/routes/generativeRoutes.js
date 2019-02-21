// const requireLogin = require('../middleware/requireLogin');
const mongoose = require('mongoose');

const Pattern = mongoose.model('patterns');

module.exports = app => {
  //app.post('/api/generate', requireLogin, (req, res) => {
  app.get('/api/generate', (req, res) => {
    console.log('Hello');
  });

  app.get('/api/pattern', async (req, res) => {
    const patterns = await Pattern.find({
      _user: req.user.id
    }).select({ colors: false });
    res.send(patterns);
  });

  app.get('/api/pattern/:id', async (req, res) => {
    const patterns = await Pattern.find({
      _user: req.user.id
    });
    res.send(patterns);
  });

  app.post('/api/generate', (req, res) => {
    console.log(req.body);
    res.send('DONE');
    /*
    const { _user, mode, duration, colors } = req.body;

    const pattern = new Pattern({
      _user: req.user.id,
      mode,
      duration,
      colors,
      date: Date.now
    });
    */
  });
};
