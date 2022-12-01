const express = require('express');
const cors = require("cors");
const PermissionTypeController = require('../controllers/permissionType.controller');
let app = express();

app.get(process.env.API_URL + '/permissiontype', cors(), PermissionTypeController.getList);
app.get(process.env.API_URL + '/permissiontype/findOne/:id', cors(), PermissionTypeController.getOne);
app.post(process.env.API_URL + '/permissiontype', cors(), PermissionTypeController.create);
app.put(process.env.API_URL + '/permissiontype', cors(), PermissionTypeController.update);


module.exports = app;