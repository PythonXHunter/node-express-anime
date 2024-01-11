const express = require('express');
const app = express();
const animeRoute = require('./routes/route');

const port = 3000;

app.get('/', (req, res) => {
    res.send('Hi Server');
})

app.use('/api/v1/anime', animeRoute);

app.listen(port, () => {
    console.log(`Server at http://localhost:${port}`);
})