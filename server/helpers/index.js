/* This will be a routing file to the specific API requesters
exports.checkout = require('./checkout')
exports.reviews = require('./reviews')

Each specific helper file will reference a specific API request
*/

exports.fetchProductInfo = require('./productInfo')
exports.fetchProductStyles = require('./productStyles')
exports.fetchProductMeta = require('./productMeta')
exports.fetchRelatedItems = require('./relatedItems')
exports.routeAPI = require('./routeAPI')