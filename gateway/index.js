const express = require('express');
const app = express();
const routes = require('./routes');

app.use((req, res, next) => {
    console.log('Incoming request:', req.method, req.originalUrl);
    next();
});
app.use('/', routes);

app.listen(8080, () => {
    console.log('API Gateway is running on port 8080');
});
