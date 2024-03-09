const express = require('express')
const authC = require('../Controllers/authController')

const router = express.Router();

router.post('/signup',authC.signup);
router.post('/login',authC.login);

module.exports=router;