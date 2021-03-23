var express = require('express');
var router = express.Router();


// Require the controller that exports To-Do CRUD functions
var skillsCtrl = require('../controllers/skills');

// all actual paths begin with "/devskills"

/* GET /devskills  ---index action /functionality*/
router.get('/', skillsCtrl.index);
// get/skills/new
router.get('/new', skillsCtrl.new);

// Get /devskills/:id
router.get('/:id', skillsCtrl.show);
// POST /skills
router.post('/', skillsCtrl.create);
//delete /skills/:id
router.delete('/:id', skillsCtrl.delete);




module.exports = router;
