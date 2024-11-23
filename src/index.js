const express = require('express');
const fetch = require('node-fetch');
const defaultRoutes = require('./routes/defaultRoutes');
const path = require('path');
require('dotenv').config();
const app = express();
const port = 3000;

app.use('/unlock_server', express.static(path.join(__dirname, '../unlock_related')));


app.use('/', defaultRoutes); 
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});