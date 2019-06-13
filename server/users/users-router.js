const router = require('express').Router();
const db = require('../database/dbConfig.js')
const Users = require('./users-model.js');
const restricted = require('../auth/restricted-middleware.js');


router.get('/', restricted, (req, res) => {
  db('users')
  .select('id', 'username', 'password')
    .then(users => {
      res.json(users);
    })
    .catch(err => res.send(err));
});

module.exports = router;
