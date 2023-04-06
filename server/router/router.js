const { discussitonController } = require('../controller/discussionController');
const { findAll, findById } = discussitonController;
const express = require('express');
const router = express.Router();

router.get('/', findAll);
router.get('/:id', findById);

module.exports = router;
