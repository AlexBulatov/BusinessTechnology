let express = require('express');
let router = express.Router();
let user = require('../models/User');

/* GET users listing. */
router.get('/', function(req, res, next) {
  let dUser = user.find({}, function (err, users) {
    if(err) return console.log(err);
    res.send(JSON.stringify(users));
  });
});

router.post('/register', function (req, res, next) {
  let newUser = new user({
    login: req.body.login,
    password: req.body.password,
    name: req.body.name,
    surname: req.body.surname,
    secondname: req.body.secondname,
    email: req.body.email,
    telephone: req.body.telephone,
    org: req.body.org
  });
  newUser.save();
});

module.exports = router;
