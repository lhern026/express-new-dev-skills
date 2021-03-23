let skills = [
    {id: 125223, skill: 'VScode', level: 'pro'},
    {id: 127904, skill: 'react', level: 'newbie'},
    {id: 139608, skill: 'algorithms', level: 'newbie'}
  ];
  
module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
  };
function deleteOne(id){
  id = parseInt(id);
  skills = skills.filter(s => s.id !== id);
  
}
function create(skill){
  //add the id
  skill.id = Date.now() % 1000000;
  skill.level = 'beginner';
  skills.push(skill);

}
function getOne(id){
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
}
function getAll() {
return skills;
}