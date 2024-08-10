const express = require('express');

const historyController = require('../Controllers/historyController');
const { route } = require('./authRoute');

const router = express.Router();

router.post('/', historyController.storeTravelData);
router.get('/:userId', historyController.retrieveTravelData);


module.exports = router;
