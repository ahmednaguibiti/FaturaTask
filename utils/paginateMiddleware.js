const middlewarePaginate = ((req, res, next) => {
    let page = req.query.page || 25;
    req.page = page;
    next();
});


module.exports = middlewarePaginate;