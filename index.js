const { response } = require('express');
const path = require('express');
const express = require('express');
const { readFile } = require('fs');
const app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(process.env.PORT || 3000, () => console.log('App is available on http://localhost:3000'))