const express = require('express');
const mysql = require('mysql');
const db = require('../database');

const router = express.Router();

var City = db.city;
var Op = db.sequelize.Op;

router.delete('/:name', (req, res) => {
    console.log("delete called")
    City.destroy({
        where: {
            Name: req.params.name
        }   
    }).then(res => {
        res.send({status: 'OK'});
    }).catch(err => {
        res.send(err);
    });
    
});

module.exports = router;