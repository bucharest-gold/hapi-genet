'use strict';

const Genet = require('genet');

module.exports.register = (server, options, next) => {
  const profile = new Genet(options);
  server.ext('onRequest', (request, reply) => {
    profile.start();
    return reply.continue();
  });
  server.ext('onPreResponse', (request, reply) => {
    profile.stop();
  });
  return next();
};

exports.register.attributes = {
  pkg: require('./package.json')
};
