const express = require('express');
const router = express.Router();
const sequelize = require('../db');
// const Pie = require('../db').import('../models/user');

// const newUser = sequelize.import('../models/user');

router.get('/', function (req, res) {
    res.send('Main page');
});

router.get('/fighter', function (req, res) {
    res.send('fighters page')
});

router.get('/rating', function (req, res) {
    res.send('fighter rating')
}); 

router.put('/rating/update', function (req, res) {
    res.send('update fighter rating')
});

router.post('/one', function(req, res) {
    res.send('Fighter 1')
});

// router.post('/two', function (req, res) {
//     let testData = "test data for endpoint two";

// newUser
//     .create({
//         testdata: testData
//     }).then(dataFromDatabase => {
//         res.send("test two went thru")
//     })
// });

module.exports = router;
