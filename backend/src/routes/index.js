const express = require('express');

const {UserRoutes, PostRoutes}= require('./v1/index');

const router = express.Router();

router.use('/v1', UserRoutes);
router.use('/v1', PostRoutes);

module.exports = router;