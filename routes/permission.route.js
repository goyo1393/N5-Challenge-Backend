const express = require('express');
const cors = require("cors");
const PermissionController = require('../controllers/permission.controller');
let app = express();

app.get(process.env.API_URL + '/permission', cors(), PermissionController.getList);
app.get(process.env.API_URL + '/permission/findOne/:id', cors(), PermissionController.getOne);
app.post(process.env.API_URL + '/permission', cors(), PermissionController.create);
app.put(process.env.API_URL + '/permission', cors(), PermissionController.update);


module.exports = app;