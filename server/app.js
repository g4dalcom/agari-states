const { discussitonController } = require('../server/controller');
const { findAll, findById } = discussitonController;
const express = require('express');
const router = express.Router();

router.get('/', findAll);
router.get('/:id', findById);

module.exports = router;
