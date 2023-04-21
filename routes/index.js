const express = require('express');

const homeController = require('../controllers/home_controller');

const router = express.Router();

console.log('Router loaded');

router.get('/',homeController.home);

module.exports = router;