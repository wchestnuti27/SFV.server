// const express = require('express');
// const router = express.Router();
const router = require('express').Router();
const Fight = require('../db').import('../models/userRatings');
const validateSession = require('../middleware/validate-session');

// const newUser = sequelize.import('../models/user');

// router.get('/', function (req, res) {
//     res.send('Main page');
// });


// GET ALL //
router.get('/', (req, res) => {
    Fight.findAll()
    .then(fight => res.status(200).json(fight))
    .catch(err => res.status(500).json({
        error: err
    }))
})

// POST //
router.post('/', (req, res) => {
    const sfvFighters = {
        fighter: req.body.fighter,
        fighterRatings: req.body.fighterRatings
    }

    // console.log(req);

Fight.create(sfvFighters)
    .then(fighter => res.status(200).json(fighter))
    .catch(err => console.log(err))
})

// GET ITEM BY NAME //
// router.get('/:name', (req, res) => {
//     Fight.findOne({
//         where: {
//             fighter: req.params.name
//         }
//     })
//     .then(fight => res.status(200).json(fight))
//     .catch(err => res.status(500).json({
//         error: err
//     }))
//     console.log(req);
// })

// UPDATE BY ID //
router.put('/:id', (req, res) => {
    Fight.update(req.body, {
        where: {
            id: req.params.id
        }
    })
    .then(fight => res.status(200).json(fight))
    .catch(err => res.json({
        error: err
    }))
})

// DELETE BY ID //
router.delete('/:id', (req, res) => {
    Fight.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(fight => res.status(200).json(fight))
    .catch(err => res.json({
        error: err
    }))
})

module.exports = router;


// router.get('/fighter', function (req, res) {
//     res.send('fighters page')
// });

// router.get('/rating', function (req, res) {
//     res.send('fighter rating')
// }); 

// router.put('/rating/update', function (req, res) {
//     res.send('update fighter rating')
// });

// router.post('/one', function(req, res) {
//     res.send('Fighter 1')
// });

// router.post('/two', function (req, res) {
//     let testData = "test data for endpoint two";

// newUser
//     .create({
//         testdata: testData
//     }).then(dataFromDatabase => {
//         res.send("test two went thru")
//     })
// });

