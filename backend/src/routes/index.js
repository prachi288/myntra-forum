const express = require('express');

const {UserRoutes, PostRoutes, CommentRoutes}= require('./v1/index');
const { route } = require('./v1/comment-routes');

const router = express.Router();

router.use('/v1', UserRoutes);
router.use('/v1', PostRoutes);
router.use('/v1', CommentRoutes)


module.exports = router;