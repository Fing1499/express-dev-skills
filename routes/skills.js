const express = require('express');
const router = express.Router();
const skillsController = require('../controllers/skills');



router.get('/', skillsController.index);

router.get('/new', skillsController.new);

router.get('/:id', skillsController.show);

router.post('/', skillsController.create);

router.delete('/:id', skillsController.deleteSkill);




module.exports = router;