module.exports = app => {
  app.get('/', (req, res) => {
    res.send({ hi: 'there' });
  });

  app.get('/mono', (req, res) => {
    res.send({ hi: 'mono' });
  });
};
