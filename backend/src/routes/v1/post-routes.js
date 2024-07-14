const express = require('express');

const {PostController}=require('../../controller/index');

const router = express.Router();


router.post('/createPost', PostController.createPost);
router.patch('/updatePost/:id', PostController.updatePost);
router.delete('/deletePost/:id', PostController.deletePost);

module.exports = router;