const express = require('express');
const deviceRouter = express.Router();

const deviceController = require('../controllers/deviceController');

deviceRouter.post('/getDeviceInfo', deviceController.onGetDeviceInfo);
deviceRouter.post('/createDevice', deviceController.onCreateDevice);

module.exports = deviceRouter;