const express = require('express')
const {getUrl,createUrl,test} = require('../Controllers/shortnerController')

const router = express.Router();

router.post('/create', createUrl)
router.get('/test',test)
router.get('/',getUrl)


module.exports = router