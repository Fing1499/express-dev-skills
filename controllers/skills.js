const { getAll, getOne } = require('../models/skill');

function index(req, res, next) {
    res.render('skills/index', { skills : getAll()});
}

function show(req, res) {
    const { id } = req.params
    res.render('skills/show', { skill: getOne(id)})
}

module.exports = {
    index, 
    show
}