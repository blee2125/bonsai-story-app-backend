const express = require('express');
const connectDB = require('./config/db');
var cors = require('cors');

// routes <---
const trees = require('./routes/api/trees');
const entries = require('./routes/api/entries');

const app = express();

// Connect Database
connectDB();

// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('test route'));

// use Routes <---
app.use('/api/trees', trees);
app.use('/api/entries', entries);

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));