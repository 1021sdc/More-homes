// const pg = require('pg');
// const config = require('./config.js');

// const conn = new pg.Pool(config);

// module.exports = conn;

const { Pool } = require('pg');

const conn = new Pool({
  host: 'localhost',
  database: 'fairtest',
});

module.exports = conn;
