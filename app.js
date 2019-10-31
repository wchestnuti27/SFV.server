const express = require('express');
const app = express();
require('dotenv').config()
const fighter = require('./controllers/fightercontroller')
const user = require('./controllers/usercontroller')
const sequelize  = require('./db');

app.use(express.json());

app.use('/fighter', fighter);

app.use('/api/user', user);

sequelize.sync()

    app.listen(process.env.PORT, function(){
        console.log(`App is listening on ${process.env.PORT}`);
    })