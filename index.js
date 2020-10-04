const express = require('express');
const fs = require('fs');

const location = process.env.LOCATION || 'localhost';
const port = process.env.PORT || 5000;

const app = express();

app.get('/', (req, res) => {
    return res.send('<h1>Hello from ' + location + '</h1>')
});

app.get('/images/logo', (req, res) => {
    fs.readFile('./assets/images/logotipo.png', function(err, data) {
        res.writeHead(200, {'Content-Type': 'image/png'});
        res.write(data);
        return res.end();
    })
});
console.log(`"https://frevonautas.mybluemix.net/images/logo"`);

app.get('/images/frevonautas', (req, res) => {
    fs.readFile('./assets/images/frevonautas.png', function(err, data) {
        res.writeHead(200, {'Content-Type': 'image/png'});
        res.write(data);
        return res.end();
    })
});
console.log(`"https://frevonautas.mybluemix.net/images/frevonautas"`);

app.get('/images/background', (req, res) => {
    fs.readFile('./assets/images/background.png', function(err, data) {
        res.writeHead(200, {'Content-Type': 'image/png'});
        res.write(data);
        return res.end();
    })
});
console.log(`"https://frevonautas.mybluemix.net/images/background"`);

app.get('/images/terra', (req, res) => {
    fs.readFile('./assets/images/terra.png', function(err, data) {
        res.writeHead(200, {'Content-Type': 'image/png'});
        res.write(data);
        return res.end();
    })
});
console.log(`"https://frevonautas.mybluemix.net/images/terra"`);

app.get('/images/nasa', (req, res) => {
    fs.readFile('./assets/images/nasa.png', function(err, data) {
        res.writeHead(200, {'Content-Type': 'image/png'});
        res.write(data);
        return res.end();
    })
});
console.log(`"https://frevonautas.mybluemix.net/images/nasa"`);

app.get('/images/background-inicial', (req, res) => {
    fs.readFile('./assets/images/background_1.png', function(err, data) {
        res.writeHead(200, {'Content-Type': 'image/png'});
        res.write(data);
        return res.end();
    })
});
console.log(`"https://frevonautas.mybluemix.net/images/background-inicial"`);

app.get('/images/background-2', (req, res) => {
    fs.readFile('./assets/images/background_3.png', function(err, data) {
        res.writeHead(200, {'Content-Type': 'image/png'});
        res.write(data);
        return res.end();
    })
});
console.log(`"https://frevonautas.mybluemix.net/images/background-2"`);

app.get('/images/astronauta', (req, res) => {
    fs.readFile('./assets/images/background_2.png', function(err, data) {
        res.writeHead(200, {'Content-Type': 'image/png'});
        res.write(data);
        return res.end();
    })
});
console.log(`"https://frevonautas.mybluemix.net/images/astronauta"`);

app.get('/images/astronauta-1', (req, res) => {
    fs.readFile('./assets/images/background_4.png', function(err, data) {
        res.writeHead(200, {'Content-Type': 'image/png'});
        res.write(data);
        return res.end();
    })
});
console.log(`"https://frevonautas.mybluemix.net/images/astronauta-1"`);

app.get('/images/logo-sem-fundo', (req, res) => {
    fs.readFile('./assets/images/sem-fundo.png', function(err, data) {
        res.writeHead(200, {'Content-Type': 'image/png'});
        res.write(data);
        return res.end();
    })
});
console.log(`"https://frevonautas.mybluemix.net/images/logo-sem-fundo"`);

app.get('/images/recompensa', (req, res) => {
    fs.readFile('./assets/images/recompensa.png', function(err, data) {
        res.writeHead(200, {'Content-Type': 'image/png'});
        res.write(data);
        return res.end();
    })
});
console.log(`"https://frevonautas.mybluemix.net/images/recompensa"`);

app.get('/expedicoes', (req, res) => {
    fs.readFile('./assets/data/expedicoes/expedicoes.json', function(err, data) {
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.write(data);
        return res.end();
    })
});
console.log(`"https://frevonautas.mybluemix.net/expedicoes"`);

app.get('/expedicoes/atmosfera', (req, res) => {
    fs.readFile('./assets/images/atmosfera.png', function(err, data) {
        res.writeHead(200, {'Content-Type': 'image/png'});
        res.write(data);
        return res.end();
    })
});
console.log(`"https://frevonautas.mybluemix.net/expedicoes/atmosfera"`);

app.get('/expedicoes/tecnologias', (req, res) => {
    fs.readFile('./assets/images/tecnologias.png', function(err, data) {
        res.writeHead(200, {'Content-Type': 'image/png'});
        res.write(data);
        return res.end();
    })
});
console.log(`"https://frevonautas.mybluemix.net/expedicoes/tecnologias"`);

app.get('/expedicoes/movimentos', (req, res) => {
    fs.readFile('./assets/images/movimentos.png', function(err, data) {
        res.writeHead(200, {'Content-Type': 'image/png'});
        res.write(data);
        return res.end();
    })
});
console.log(`"https://frevonautas.mybluemix.net/expedicoes/movimentos"`);

app.get('/expedicoes/tempo', (req, res) => {
    fs.readFile('./assets/images/tempo.png', function(err, data) {
        res.writeHead(200, {'Content-Type': 'image/png'});
        res.write(data);
        return res.end();
    })
});
console.log(`"https://frevonautas.mybluemix.net/expedicoes/tempo"`);

app.listen(port, () => console.log('Executando na porta', port));
console.log(`Executando em http://${location}:${port}`);