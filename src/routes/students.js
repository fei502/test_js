const express = require('express');
const router = express.Router();
const {addStudent} = require('../controllers/students');

router.post('/',addStudent);

module.exports = router;
