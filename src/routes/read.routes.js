const express = require('express');
const mysql = require('mysql');
const db = require('../database');

const router = express.Router();

var City = db.city;
var Op = db.sequelize.Op;

router.get('/', (req, res) => {
    console.log(req.params.name);
    City.findAll({
        raw: true,
        attributes: ['Name','CountryCode','Population']
    }).then(cities => {
        res.send(cities);
    }).catch(err => {
        res.send(err);
    });   
});

router.get('/:name', (req, res) => {
    console.log(req.params.name);
    City.findAll({
        raw: true,
        attributes: ['Name','CountryCode','Population'],
        where: {Name: {
            [Op.like]: "%" + req.params.name + "%"
        }}
    }).then(cities => {
        res.send(cities);
    }).catch(err => {
        res.send(err);
    });   
});

module.exports = router;