const products = require('../models/products'),
      productProvider = require('../models/product_providers'),
      { Op } = require("sequelize");


exports.getProducts = (req, res) => {
    let productID = req.params.productID;
    products.findAll({
        limit: req.page,
        attributes: ['name'],
        where: {
            category_id: productID
        },
        include: [
            {
                model: productProvider,
                where: {
                    available: { [Op.eq]: 1 }
                },
                attributes: ['price']
            }
        ],
        order: [
            [productProvider, 'price', 'ASC']
        ],
        
    })
    .then( result => {
        res.json(result);
    });
}