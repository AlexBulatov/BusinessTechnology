let express = require('express');
let router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    let respond = 'respond with a resource - company ' + req.body.login + ' ' + req.body.password;
    res.send(respond);
});

router.get('/:id', function (req, res, next) {
   res.send('respond with function: ' + req.params.id);
});



module.exports = router;
