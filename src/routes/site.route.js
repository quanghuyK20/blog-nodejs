var express = require('express');
const router = express.Router();

const siteController = require("../app/controllers/Site.controller");

router.use('/search', siteController.search);
router.use('/', siteController.index);

module.exports = router;