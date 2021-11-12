const express = require('express');
const router = express.Router();

const userCrt = require('../controllers/user');

router.post('/signup', userCrt.signup);
router.post('/login', userCrt.login);


module.exports = router;