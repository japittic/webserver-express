const express = require('express')
const app = express()
const hbs = require('hbs');

const PORT = process.env.PORT || 3000;

require('./hbs/helpers/helpers');
app.use(express.static(__dirname + '/public'));
hbs.registerPartials(__dirname + '/views/parciales')
app.set('view engine', 'hbs');



app.get('/', function(req, res) {
    res.render('home', {
        nombre: 'Jose Arturo Pitti',

    });
});

app.get('/about', function(req, res) {
    res.render('about', {

    });
});

app.listen(PORT, () => {

    console.log(`Escuchando puerto ${PORT}`);
});