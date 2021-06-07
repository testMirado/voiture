const mongoose = require('../config/database');

var Car = mongoose.model('Car', {
    marque: { type: String },
    model: { type: String }
});

const voiture1 = new Car({marque: 'BMW', model: 'M2'});
voiture1.save().then(_ => console.log("Voiture créer"));

module.exports = Car;
