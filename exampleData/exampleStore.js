const prod3StyleData = require('./prodStyles/product3Style');

module.exports = {
  currentProductId: 11003,
  products: {
    11003: {
      name: 'Morning Joggers',
      slogan: 'Make yourself a morning person',
      description: 'Whether you\'re a morning person or not.  Whether you\'re gym bound or not.  Everyone looks good in joggers.',
      category: 'pants',
      defaultPrice: '40.00',
      features: [
        {
          'feature': 'Fabric',
          'value': '100% Cotton'
        },
        {
          'feature': 'Cut',
          'value': 'Skinny'
        }
      ],
      styleList: prod3StyleData.results,
      avgRating: 3,
      relatedItemsIds: [ 11005, 11009, 11007, 11002, 11001],
      id: 11003
    }
  }
};