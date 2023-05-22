const skills = [
    {id: 1, name: 'JavaScript', level: 'Good'},
    {id: 2, name: 'CSS', level: 'Good'},
    {id: 3, name: 'HTML', level: 'Good'}, 
    {id: 4, name: 'Node.js', level: 'Bad'}, 
    {id: 5, name: 'ejs', level: 'Bad'}
];


function deleteThis(id) {
    id = parseInt(id);
    const skillid = skills.findIndex(skill => skill.id === id);
    skills.splice(skillid, 1);
}

function create(skill) {
    skill.id = Date.now() % 1000000;
    skill.level = 'Bad';
    console.log(skill);
    skills.push(skill);
    console.log(skills);
}

function getAll() {
    return skills;
}

function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
}

module.exports = {
    getAll,
    getOne,
    create,
    deleteThis
}