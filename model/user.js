const mongoose = require('../config/database');

var User = mongoose.model('User', {
   username: { type: String },
   password: { type: String }
});

const user1 = new User({username: 'test2', password: 'password'});
user1.save().then(_ => console.log("Utilisateur créer"));

module.exports = User;
