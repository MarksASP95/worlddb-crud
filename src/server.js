const express = require('express');
const morgan = require('morgan');
const path = require('path');
const db = require('./database');

var City = db.city;
var Op = db.Sequelize.Op;

const app = express();

app.set('port', process.env.PORT || 3000);

// MIDDLEWARES
app.use(morgan('dev'));
app.use(express.json());

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