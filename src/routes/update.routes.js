const express = require('express');
const mysql = require('mysql');
const db = require('../database');

const router = express.Router();

var City = db.city;

router.put('/', (req, res) => {
    
    City.update(
        {Name: req.body.newName},
        {
            where:{
               Name: req.body.curName 
            }
        }
    )
    .then(res =>{
        res.send({status: "OK"});
    })
    .catch(err => {
        res.send(err);
    })
    
});

module.exports = router;