const pg = require('pg');
const config = require('./config.js');

// const conn = new pg.Client(config);

const conn = new pg.Pool(config);

module.exports = conn;
