var express = require('express');
var router = express.Router();
var classrooms = require('../models/classrooms');
var desk = require('../models/desk');

/* GET /classrooms/ */
router.get('/', function (req, res, next) {
    classrooms.find(function (err, data) {
        if (err) return next(err);
        res.json(data);
    });
});

/* GET /classrooms/:id */
router.get('/:id', function (req, res, next) {
    classrooms.find({'number': req.params.id},function (err, data) {
        if (err) return next(err);
        res.json(data);
    });
});

/* PUT /classrooms/:id */
router.put('/:id', function (req, res, next) {
    console.log(req.body);
    console.log(req.params);

    classrooms.count({'number': req.params.id}, function (err, count){
        if(count>0){
            //document exists
            classrooms.findOneAndUpdate({'number': req.params.id}, req.body, function (err, data) {
                console.log(err.message);
                if (err) return next(err);
                res.json(data);
            });
        }
        else {
            classrooms.create(req.body, function (err, data) {
                //console.log(data);
                if (err) return next(err);
                res.json(data);
            });
        }
    });
});

/* DELETE /classrooms/:id */
router.delete('/:id', function (req, res, next) {
    classrooms.findByIdAndRemove(req.params.id, req.body, function (err, data) {
        if (err) return next(err);
        res.json(data);
    });
});

module.exports = router;