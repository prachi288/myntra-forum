const express = require('express');

const {CommentController}=require('../../controller/index');

const router = express.Router();

router.post('/createComment/:postId', CommentController.createComments);
router.post('/createNestedComment/:commentId', CommentController.createNestedComment);

module.exports = router;