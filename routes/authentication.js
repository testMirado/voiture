const express = require('express');
const User = require('../model/user');
const jwt = require('jsonwebtoken');
const router = express.Router();

const tokenValue = 'aqwzsxEDCRFV12093487';

/**
 * REGISTER USER
 */
router.post('/register', (req, res) => {
    var username = req.body.username;
    var password = req.body.password;

    if(!username) {
        res.json({ success: false, message: "Nom d'utilisateur requis" });
        return
    }

    if (!password) {
        res.json({ success: false, message: "Mots de passe requis" });
        return
    }

    var user = new User({
        username: username,
        password: password
    });

    user.save((error) => {
        if (error) {
            res.json({ success: false, message: error});
            return
        }

        res.json({ success: true, message: "Utilisateur créer"});
    })
});

/**
 * LOGIN
 */
router.post('/login', (req, res) => {
    var username = req.body.username;
    var password = req.body.password;

    if(!username) {
        res.json({ success: false, message: "Nom d'utilisateur requis" });
        return
    }

    if (!password) {
        res.json({ success: false, message: "Mots de passe requis" });
        return
    }

    User.findOne({username: username, password: password}, (error, user) => {
        if (error) {
            res.json({ success: false, message: error });
            return;
        }

        if (!user) {
            res.json({ success: false, message: "Nom d'utilisateur ou mots de passe incorrecte" });
            return;
        }

        const token = jwt.sign({ userId: user._id }, tokenValue, { expiresIn: '24h' });

        res.json({
            success: true,
            message: 'Success!',
            jwtoken: token,
            user: { username: user.username }
        });
    })
});

module.exports = router;
