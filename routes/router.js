const express = require('express'),
      router = express.Router(),
      productController = require('../controller/productController'),
      toggleSetController = require('../controller/setOrUnsetController'),
      middlewarePaginate = require('../utils/paginateMiddleware');

      

router.get('/products/:productID', middlewarePaginate, productController.getProducts);

router.get('/toggleSetProduct/:productId', toggleSetController.setOrUnsetCategory);


module.exports = router;