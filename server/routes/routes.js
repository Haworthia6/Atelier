const controllers = require('../controllers');
const router = require('express').Router();

router.post('/product', controllers.getProductInfo);
router.post('/styles', controllers.getProductStyles);
router.post('/meta', controllers.getProductMeta);
router.post('/related', controllers.getRelatedItems);

module.exports = router;
