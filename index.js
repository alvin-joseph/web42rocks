require('dotenv').config();
const express = require('express');
const path = require('path');
const cors = require('cors');

const server = express();

server.use(express.json());
server.use(cors());
server.use(express.static(path.join(__dirname, 'client/build'))); //static assets


if (process.env.NODE_ENV === 'production') {
    console.log('this means this code is deployed');
  }

const PORT = process.env.PORT || 5000;

server.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

server.get('/api', (req, res) => {
    res.json({ message: `${process.env.COHORT} ROCKS`});
});

server.use((req, res) => {
    res.status(404).json({
        message: 'not found sorry'
    });
});

server.listen(PORT, () => {
    console.log(`listening on ${PORT}`);
});