const Router = require('express').Router;
const UserController = require('../controllers/User-controller');
const PostController = require('../controllers/Post-controller');
const authorized = require('../utilies/checkAuth');
const validation =  require('../validations/Auth');
const router = new Router();
const cors = require('cors')

router.post('/auth/register', validation.registerValidaton, UserController.register);
router.post('/auth/login', validation.loginValidation, UserController.login);
router.get('/auth/me', authorized, UserController.activation)

router.post('/post', authorized, validation.postValidation, PostController.create)
router.get('/posts',  authorized, validation.postValidation, PostController.getAllPosts);
router.get('/posts/:id', PostController.getOnePost);
router.delete('/posts/:id', PostController.removePost);
router.patch('/refresh/posts/:id', PostController.upgradePost);

module.exports = router;