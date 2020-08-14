const products = require('../models/products');

exports.setOrUnsetCategory = (req, res) => {
    let productId = req.params.productId;
    let categoryId = req.query.setCategoryId || null;
    
    if(categoryId){
        products.update({category_id: categoryId}, {
            where: {
                id: productId
            }
        })
    }else{
        products.update({category_id: null}, {
            where: {
                id: productId
            }
        })
    }
    res.send('Done')
}