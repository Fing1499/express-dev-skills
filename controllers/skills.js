const skills = require('../models/skill');


module.exports = {
    index, 
    show
}



function show(req, res) {
    res.render('skills/show', { 
        skills: skills.getOne(req.params.id),
        title: 'Skill details'
    });
}


function index(req, res, next) {
    res.render('skills/index', { 
        skills: skills.getAll(),
        title: 'All skills'
    });
}
