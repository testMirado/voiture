const express = require('express');
const Car = require('../model/voiture');
const router = express.Router();

/**
 * REGISTER CAR
 */
router.post('/add', (req, res) => {
    var marque = req.body.marque;
    var model = req.body.model;

    if(!marque) {
        res.json({ success: false, message: "Veuillez saisir la marque." });
        return;
    }

    if (!model) {
        res.json({ success: false, message: "Veuillez saisir la model." });
        return;
    }

    var car = new Car({
        marque: marque.toUpperCase(),
        model: model.toUpperCase()
    });

    car.save((error) => {
        if (error) {
            res.json({ success: false, message: error});
            return;
        }

        res.json({ success: true, message: "Voiture ajouter"});
    })
});


/**
 * GET ALL CAR
 */

router.get('/', (req,res) => {
    Car.find((err, docs) => {
        if(err) {
            res.json({ success: false, message: err});
        }
        res.json({ success: true, result: docs})
    })
});


module.exports = router;
