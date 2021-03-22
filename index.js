const express = require('express');
const router = require('./routes');
const model = require('./models');

require('dotenv').config();
console.log(process.env);

const app = express();
app.use(express.json());

app.disable('x-powered-by');

app.use((req, res, next) => {
    res.set('Access-Control-Allow-Origin', 'http://localhost:3001');
    next();
});

app.use('/', router);

model.init({
    username: process.env.SQL_USERNAME,
    password: process.env.SQL_PASSWORD,
    host: process.env.SQL_HOST,
    port: process.env.SQL_PORT,
    database: process.env.SQL_DATABASE,
})
    .then(() => {
        app.listen(3000, () => {
            console.log('express-rest-demo listening on port 3000');
        });        
    });