const express = require('express');
const app = express();

app.use(require('./permissionType.route'));
app.use(require('./permission.route'));

module.exports = app;