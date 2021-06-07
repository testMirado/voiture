const express = require('express');
const Post = require('../model/post');
const router = express.Router();

/**
 * ADD POST
 */
router.post('add', (req, res) => {
    const posts = req.body.post;
    const user = req.body.user;
    const model = req.body.model;

    if(!post) {
        res.json({ success: false, message: "Veuillez ajouer un commentiare." });
        return;
    }

    var p = new Post({
        post: posts,
        user: user,
        model: model
    });

    p.save((error) => {
        if (error) {
            res.json({ success: false, message: error});
            return;
        }

        res.json({ success: true, message: "Commentaire ajouter"});
    })
});

/**
 * GET POST
 */

router.get('/:model', (req, res) => {
    Post.find({car: req.params.model.toUpperCase()}, (error, doc) => {
        if (error) {
            res.json({ success: false, message: error});
            return;
        }

        res.json({success: true, response: doc})
    })
});

module.exports = router;
