const { discussitonController } = require('../controller/discussionController');
const { findAll, findById, create } = discussitonController;
const express = require('express');
const router = express.Router();

router.get('/', findAll);
router.get('/:id', findById);
router.post('/', create);

module.exports = router;
