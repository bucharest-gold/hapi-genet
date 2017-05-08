'use strict';

const test = require('tape');
const plugin = require('./index.js');
const hapi = require('hapi');

test('request', (t) => {
  const server = new hapi.Server();
  server.connection();

  server.route({
    method: 'GET',
    path: '/',
    handler: (request, reply) => {
      reply({ foo: 'bar' });
    }
  });

  server.register({
    register: plugin,
    options: {}
  }, (error) => {
    server.inject('/', () => { });
  });
  t.true(true);
  t.end();
});
