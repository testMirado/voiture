const mongoose = require('../config/database');

var Post = mongoose.model('Post', {
    post: { type: String },
    user: { type: String },
    car: { type: String }
});

const post1 = new Post({post: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel ante tellus', user: 'test2', car: 'M2'});
post1.save().then(_ => console.log("Commentaire ajouter"));

module.exports = Post;
