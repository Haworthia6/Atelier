const helpers = require('../helpers');

module.exports = {
  getProductInfo: (req, res) => {
    helpers.routeAPI(req.query.id, helpers.fetchProductInfo, req, res);
  },
  getProductStyles: (req, res) => {
    helpers.routeAPI(req.query.id, helpers.fetchProductStyles, req, res);
  },
  getProductMeta: (req, res) => {
    helpers.routeAPI(req.query.id, helpers.fetchProductMeta, req, res);
  },
  getRelatedItems: (req, res) => {
    helpers.routeAPI(req.query.id, helpers.fetchRelatedItems, req, res);
  }
};