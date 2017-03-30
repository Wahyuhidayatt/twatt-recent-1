const express = require('express');
const router = express.Router();
const helper = require ('../helpers/twattRecent');


router.get('/tweet', helper.twitterOauth)

module.exports = router;
