const controllers = require('../controllers');
const router = require('express').Router();

router.get('/product', controllers.getProductInfo);
router.get('/styles', controllers.getProductStyles);
router.get('/meta', controllers.getProductMeta);
router.get('/related', controllers.getRelatedItems);

module.exports = router;
