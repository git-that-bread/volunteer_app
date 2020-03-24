const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

const app = express();

// Connect Database
connectDB();

// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('Hello world!'));

// TODO: Add routes middleware
const volRouter = require('./routes/volunteers');
app.use('/volunteers', volRouter);

const orgRouter = require('./routes/organization');
app.use('/orgs', orgRouter);

const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server running on port ${port}`));
