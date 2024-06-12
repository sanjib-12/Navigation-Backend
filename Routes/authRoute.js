const express = require('express');

const authController = require('../Controllers/authController');

const router = express.Router();

router.post('/signup', authController.signup);
router.post('/login', authController.login);

//Forgot password
router.post('/reset', authController.resetPassword);

module.exports = router;
