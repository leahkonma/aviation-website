/**
 * This file sets up an Express server with routing, static file serving, 
 * and EJS view rendering.
 * 
 * @author Yadira Cervantes
 */

const express = require('express');
const router = require('./routers/router.js');
const dotenv = require('dotenv');

// Configure dotenv
dotenv.config({
    path: './config.env'
});

const { PORT } = process.env;
const app = express();

// Set up EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', './views');

// Serve static files
app.use(express.static('./public'));

// Mount router
app.use('/', router);

app.listen(PORT, () => {
    console.log(`Running on http://localhost:${PORT}`);
});