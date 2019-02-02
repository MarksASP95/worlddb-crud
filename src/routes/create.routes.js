const express = require('express');
const mysql = require('mysql');
const db = require('../database');

const router = express.Router();

var City = db.city;

router.post('/', (req, res) => {
    City.create({
        Name: req.body.Name,
        CountryCode: req.body.CountryCode,
        District: req.body.District,
        Population: req.body.Population
    })
    .then(city => {
        res.send(city)
    })
});

module.exports = router;