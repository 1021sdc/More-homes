require('newrelic')
const compression = require('compression');
const express = require('express');
const bodyParser = require('body-parser');
const getHomes = require('../db/models.js');
const conn = require('../db/conn.js');
const PORT = 3005;

const createApp = (dbConnection) => {
  const app = express();

  app.use(compression());
  app.use(bodyParser.json());
  app.use(express.static(`${__dirname}/../public/dist`));

  // correct the following to utilize pg
  app.get('/MoreHomes', (req, res) => {
    getHomes.pgLoadQuery(dbConnection, (err, data) => {
      if (err) {
        console.log('GET error: ', err)
        res.status(500).send();
      } else {
        console.log(data.rows[0]);
        res.status(200).send(data.rows);
      }
    });
  });

  // most basic handing of crud
  // app.route('/MoreHomes')
  //   .get((req, res) => {
  //     res.send('Get a random home');
  //   })
  //   .post((req, res) => {
  //     res.send('Add a home to db');
  //   })
  //   .put((req, res) => {
  //     res.send('Edit a stored home');
  //   })
  //   .delete((req, res) => {
  //     res.send('Remove a stored home');
  //   });

  return app;
};

const app = createApp(conn)

app.listen(PORT, () => console.log('More-homes app listening on port: ', PORT));

module.exports = {
  createApp,
};
