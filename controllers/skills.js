const skill = require('../models/skill')

module.exports = {
    index,
    show,
    new: newSkill,
    create,
    delete: deleteSkill
};
function deleteSkill(req, res){
    skill.deleteOne(req.params.id);
    //we provide the subsequent get request
    res.redirect('/skills');
}
function create(req, res) {
    console.log(req.body)
    //the model is responsible for creating the data
    skill.create(req.body);
    //always do a redirect when data has changed(nongetrequest)
    res.redirect('/skills');

}
function newSkill(req, res){
    res.render('skills/new');
}

function show(req, res){
    res.render('skills/show', {
        skill: skill.getOne(req.params.id)
    })
}
///controllers/devskills.js
function index(req, res) {
    res.render('skills/index', {
        skills: skill.getAll(),
        time: req.time
    });
};