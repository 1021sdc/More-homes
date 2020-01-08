const pg = require('pg');
const config = require('./config.js');

const conn = new pg.Pool({});

module.exports = conn;
