let express = require('express');
let router = express.Router();
let user = require('../models/User');

/* GET users listing. */
router.get('/open/:id', function(req, res, next) {
    let dUser = user.find({}, function (err, users) {
        if(err) return console.log(err);
        res.send(JSON.stringify(users));
    });
});

router.post('/send', function (req, res, next) {
    res.send(1);
});

module.exports = router;
