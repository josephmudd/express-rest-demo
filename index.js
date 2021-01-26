const express = require('express');
const router = require('./routes');

const app = express();
app.use(express.json());

app.disable('x-powered-by');

app.use((req, res, next) => {
    res.set('Access-Control-Allow-Origin', 'http://localhost:3001');
    next();
});

app.use('/', router);

app.listen(3000, () => {
    console.log('express-rest-demo listening on port 3000');
});
