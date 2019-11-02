require('dotenv').config()

const express = require('express');
const app = express();

const fighter = require('./controllers/fightercontroller')
const user = require('./controllers/usercontroller')

const sequelize  = require('./db');
sequelize.sync()
app.use(express.json());
app.use(require('./middleware/headers'));

app.use('/auth', user);
app.use(require('./middleware/validate-session')); // bouncer
app.use('/ratings', fighter);
// app.use('/api/user', user);


    app.listen(process.env.PORT, function(){
        console.log(`App is listening on ${process.env.PORT}`);
    })