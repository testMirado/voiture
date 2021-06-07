const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');

const authentication = require('./routes/authentication');
const car = require('./routes/car');
const post = require('./routes/post');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/authentication', authentication);
app.use('/car', car);
app.use('/post', post);

app.listen(port, function() {
    console.log("Running the server on port " + port);
});
