const faker = require('faker');

const getAll = (connection, callback) => {
  const query = 'SELECT * FROM homes ORDER BY RAND() LIMIT 12';
  connection.query(query, (err, result) => {
    if (err) {
      callback(err);
    } else {
      callback(null, result);
    }
  });
};

const pgLoadQuery = (connection, callback) => {
  const randomMin = faker.random.number({ in: 1, max: 9999988 });
  const randomMax = randomMin + 12;
  const query = `SELECT * FROM homes WHERE id > ${randomMin} AND id <= ${randomMax}`;
  connection.query(query, (err, results) => {
    if (err) {
      callback(err);
    } else {
      callback(null, results);
    }
  });
};

const addHouse = (connection, arr, callback) => {
  const query = 'INSERT INTO homes (img, house_type, location, description, cost_per_night, rating, votes) VALUES ?';
  connection.query(query, [arr], (err) => {
    if (err) {
      callback(err);
    } else {
      callback(null);
    }
  });
};

module.exports = {
  getAll,
  pgLoadQuery,
  addHouse,
};
