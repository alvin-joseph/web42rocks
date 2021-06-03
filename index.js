require('dotenv').config();
const express = require('express');
const server = express();

const PORT = process.env.PORT || 5000;

server.get('/api', (req, res) => {
    res.json({ message: `${process.env.COHORT} ROCKS`});
});

server.listen(PORT, () => {
    console.log(`listening on ${PORT}`);
});