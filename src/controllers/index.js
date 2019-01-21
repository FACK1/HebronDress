const express = require('express');
const error = require('./error');
const home = require('./home');
const oneDress = require('./oneDress');
const products = require('./products');
const search = require('./search');

const router = express.Router();

router.get('/', home.get);
router.get('/oneDress/:id', oneDress.get);
router.get('/products', products.get);
router.get('/search', search.get);

router.use(error.pageNotFound);
router.use(error.serverError);
module.exports = router;
