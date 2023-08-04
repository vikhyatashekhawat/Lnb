const express = require('express');
const router = express.Router()
const Controllers = require("../Controllers/Controllers");

router.get('/', Controllers.checkOddEven)
router.post('/checkNumber', Controllers.checkPost)

module.exports = router