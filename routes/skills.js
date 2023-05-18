const express = require('express');
const router = express.Router();

const { index, show } = require('../controllers/skills')

router.get('/', index);




module.exports = {
    router

}