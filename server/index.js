// console.log(process.env.LANG);

const server = require('live-server');

const params = {
  host: 'localhost',
  port: 300,
  open: false,
  root: './client'
}

server.start(params)