function index(req, res, next) {
    res.render('index', { title: 'Dev Skills'});
}

module.exports = {
    index
}