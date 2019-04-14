let express = require('express');
let router = express.Router();
let project = require('../models/Project');
let mongo = require('mongoose');

/* GET users listing. */
router.get('/', function(req, res, next) {
    project.find({isShadow: false}, function(err, arr) {
        if(err) return console.log(err);
        res.send(arr);
    });
});

router.get('/rd', function (req, res, next) {
    project.find({stakeholder: {orgtype: 'R&D'}, isShadow: false}, function(err, arr) {
        if(err) return console.log(err);
        res.send(arr);
    });
});

router.get('/comp', function (req, res, next) {
    project.find({stakeholder: {orgtype: 'Company'}, isShadow: false}, function(err, arr) {
        if(err) return console.log(err);
        res.send(arr);
    });
});

router.get('/:id', function (req, res, next) {
    project.findById(req.params.id, function(err, arr) {
        if(err) return console.log(err);
        res.send(arr);
    });
});

router.post('/', function (req, res, next) {
    let newProject = new project(
        {
            title: req.body.title,
            stakeholder: {
                title: req.body.title,
                orgtype: req.body.orgtype
            },
            description: req.body.description,
            techtask: req.body.techtask,
            budget: Number(req.body.budget),
            isShadow: (req.body.isShadow === '1'),
            isPromote: (req.body.isPromote === '1')
        }
    );
    newProject.save();
});

router.put('/', function (req, res, next) {
    let id = req.body.id;
    let updateProject = new project(
        {
            title: req.body.title,
            stakeholder: {
                title: req.body.title,
                orgtype: req.body.orgtype
            },
            description: req.body.description,
            techtask: req.body.techtask,
            budget: Number(req.body.budget),
            isShadow: (req.body.isShadow === '1'),
            isPromote: (req.body.isPromote === '1')
        }
    );
    project.findOneAndUpdate({_id: id}, updateProject, {}, function(err, doc){
        if (err) res.send(500, { error: err });
        else res.send("succesfully saved");
    });
});

router.delete('/:id', function (req, res, next) {
    project.deleteOne({_id: req.params.id}, function (err) {
        res.send("error");
    });
    res.send("success");
});

module.exports = router;
