const skills = [
    {id: 1, name: 'JavaScript', level: 'Good'},
    {id: 2, name: 'CSS', level: 'Good'},
    {id: 3, name: 'HTML', level: 'Good'}, 
    {id: 4, name: 'Node.js', level: 'Bad'}, 
    {id: 5, name: 'ejs', level: 'Bad'}
];

function getAll() {
    return skills;
}

function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
}

module.exports = {
    getAll,
    getOne
}