var express = require('express');
var index = require('./controllers/index')
var user = require('./controllers/user.js')
var topic = require('./controllers/topic')
var router = express.Router();
//index.js
router.get('/', index.showIndex);
//user.js
router
	.get('/signin', user.showSignIn)
	.post('/signin', user.handleSignIn)
	.get('/signup', user.showSignUp)
	.post('/signup', user.handleSignUp)
	.get('/signout', user.handleSignOut)
//topic.js
router
	.get('/topic/create', topic.showTopic)
	.post('/topic/create', topic.handelTopic)
	.get('/topic/:topicID', topic.showTopicDet)
	.post('/topic/:topicID', topic.handleTopicDet)
	.get('/topic/:topicID/edit', topic.showTopicEdit)
	.post('/topic/:topicID/edit', topic.handleTopicEdit)
	.post('/topic/:topicID/delete', topic.handleTopicDel)

module.exports = router;
