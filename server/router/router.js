const { discussitonController } = require('../controller/discussionController');
const { findAll, findById } = discussitonController;
const express = require('express');
const router = express.Router();

router.get('/', findAll);
router.get('discussion/:id', findById);

module.exports = router;
