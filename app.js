/*
    Instalaciones: 
    - npm i express
    - npm install hbs
    - npm i dotenv
*/

require('dotenv').config();
const express = require('express');
const hbs = require('hbs');

const app = express()
// const port = 8080;
const port = process.env.PORT;

// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials( __dirname + '/views/partials' ); // usando parciales

// Servir contenido estatico
app.use( express.static('public') ); // para el path "/"

app.get('/', (req, res) => {
    // res.render( 'home' )

    res.render( 'home', {
        // argumentos desde el controlador
        nombre: 'Elvis Segura',
        titulo: 'Curso de Node'
    } )
});

app.get('/generic', (req, res) => {
    res.render( 'generic', {
        nombre: 'Elvis Segura',
        titulo: 'Curso de Node'
    } )
});
app.get('/elements', (req, res) => {
    res.render( 'elements', {
        nombre: 'Elvis Segura',
        titulo: 'Curso de Node'
    } )
});

app.get('*', (req, res) => {
    res.sendFile( __dirname + '/public/404.html' )
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});

//probar:
// http://localhost:3000
// http://localhost:3000/hello-world
// http://localhost:3000/qwertyuiop
