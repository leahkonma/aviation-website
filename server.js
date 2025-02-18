/**
 * This file sets up an Express server with routing, static file serving, 
 * and EJS view rendering.
 * 
 * @author Yadira Cervantes
 */

import express from 'express';
import router from './routers/router.js';
import dotenv from 'dotenv';

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

app.listen(PORT, console.log(`Running on http://localhost:${PORT}`));