const skills = require('../models/skill');


function deleteSkill(req, res) {
    skills.deleteThis(req.params.id);
    res.redirect('/skills');
}

function create(req, res) {
    skills.create(req.body);
    console.log(req.body)
    res.redirect('/skills');
}

function newSkill(req, res) {
    res.render('skills/new', {
        title: 'New Skill'
    });
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

module.exports = {
    index, 
    show,
    new: newSkill,
    create,
    deleteSkill,
}