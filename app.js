const express = require('express');
const cors = require('cors');
const fs = require('fs');
const app = express();

app.use(cors());

app.get('/', (req, res) => res.send('Mock service for shoelogger back-end'));

function sendFileContent(fileName, res) {
    fs.readFile(`${fileName}`, (err, data) => {
        if (err) {
            res.sendStatus(404);
            return;
        }

        res.send(data);
    });
}

// BRANDS
app.get('/brands/get-brands.php', (req, res) => {
    res.append('Content-Type', 'application/json');
    const fileName = 'brands/get-brands.json';
    sendFileContent(fileName, res);
});

app.post('/brands/post-brand.php', (req, res) => {
    res.append('Content-Type', 'application/json');
    const fileName = 'brands/post-brand.json';
    sendFileContent(fileName, res);
});

app.post('/brands/delete-brand.php', (req, res) => {
    res.append('Content-Type', 'application/json');
    const fileName = 'brands/delete-brand.json';
    sendFileContent(fileName, res);
});

// TYPES
app.get('/types/get-types.php', (req, res) => {
    res.append('Content-Type', 'application/json');
    const fileName = 'types/get-types.json';
    sendFileContent(fileName, res);
});

// SHOES
app.get('/shoes/get-shoes.php', (req, res) => {
    res.append('Content-Type', 'application/json');
    const fileName = 'shoes/get-shoes.json';
    sendFileContent(fileName, res);
});

app.post('/shoes/get-shoes-by-id.php', (req, res) => {
    res.append('Content-Type', 'application/json');
    const fileName = 'shoes/get-shoes-by-id.json';
    sendFileContent(fileName, res);
});

app.post('/shoes/post-shoe.php', (req, res) => {
    res.append('Content-Type', 'application/json');
    const fileName = 'shoes/post-shoe.json';
    sendFileContent(fileName, res);
});

app.post('/shoes/put-shoe.php', (req, res) => {
    res.append('Content-Type', 'application/json');
    const fileName = 'shoes/put-shoe.json';
    sendFileContent(fileName, res);
});

app.post('/shoes/delete-shoe.php', (req, res) => {
    res.append('Content-Type', 'application/json');
    const fileName = 'shoes/delete-shoe.json';
    sendFileContent(fileName, res);
});

// LOGS
app.get('/logs/get-logs.php', (req, res) => {
    res.append('Content-Type', 'application/json');
    const fileName = 'logs/get-logs.json';
    sendFileContent(fileName, res);
});

app.post('/logs/post-log.php', (req, res) => {
    res.append('Content-Type', 'application/json');
    const fileName = 'logs/post-log.json';
    sendFileContent(fileName, res);
});

app.post('/logs/delete-log.php', (req, res) => {
    res.append('Content-Type', 'application/json');
    const fileName = 'logs/delete-log.json';
    sendFileContent(fileName, res);
});

app.listen(8080, () => console.log('Example app listening on port 8080!'));