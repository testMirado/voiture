const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/voiture',{
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err) => {
    if (!err)
        console.log('Connexion réussie');
    else
        console.log('Connexion chouée : ' + JSON.stringify(err));
});

module.exports = mongoose;
