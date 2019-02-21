const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(proxy('/auth/google', { target: 'http://localhost:5000/' }));
  app.use(proxy('/testFind', { target: 'http://server:4001/' }));
  app.use(proxy('/api', { target: 'http://server:4001/' }));
};
