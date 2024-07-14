const express = require('express');

const {LikeController}=require('../../controller/index');

const router = express.Router();

router.post('/likes/:postId', LikeController.toggleLike);

module.exports = router;