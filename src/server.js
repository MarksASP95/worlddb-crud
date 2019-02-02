const express = require('express');
const morgan = require('morgan');
const path = require('path');
const db = require('./database');

var City = db.city;
var Op = db.Sequelize.Op;

/* City.destroy({
    where: {
        Name: "Wakanda"
    }
}).then(deletedCity => {
    console.log(deletedCity);
}); */

/* City.update({
    Name: "Caracas"
},
{
    where:{
        Name: "Las Malandradas"
    }
}).then(updatedCity => {
    console.log(updatedCity);
}); */


/* City.create({
    Name: 'Wakanda',
    CountryCode: 'VEN',
    District: 'Twitch',
    Population: 100
}).then(createdCity => {
    console.log(createdCity)
}) */



/* const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'world'
});

conn.connect( err => {
    if(err) {
        throw err;
    }
}); */

const app = express();

app.set('port', process.env.PORT || 3000);

// MIDDLEWARES
app.use(morgan('dev'));
app.use(express.json());

// ROUTES
//app.use('/read', require('./routes/read.routes'));

/* app.get('/read', async (req, res) => {
    conn.query('SELECT * FROM city WHERE Name = "Paradise"', (error, results, fields) => {
        if (error) throw error;
        res.send(results);
        console.log(results);
    });
}); */


app.use('/create', require('./routes/create.routes'));
app.use('/read', require('./routes/read.routes'));
app.use('/update', require('./routes/update.routes'));
app.use('/delete', require('./routes/delete.routes'));

// STATIC FILES
app.use(express.static(path.join(__dirname, 'public')));

// START SERVER
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});