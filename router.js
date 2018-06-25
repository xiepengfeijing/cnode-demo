// 1 安装express
// 2 express.Router() 
// 3 router.get()
// 4 导出router
// 5 在app.js导入 并且 挂载路由 app.use(router)
var express = require('express')
var user = require('./controllers/user')
var topic = require('./controllers/topic')
var index = require('./controllers/index')

var router = express.Router()

// 首页路由
router.get('/', index.showIndex)

// 用户路由
router
    .get('/signin', user.showSignin)
    .post('/signin', user.handleSignin)
    .get('/signup', user.showSignup)
    .post('/signup', user.handleSignup)
    .post('/signout', user.handleSignout)


// 话题路由
router
    .get('/topic/create', topic.showTopic)
    .post('/topic/create', topic.handleTopic)
    .get('/topic/:topicID', topic.showTopicID)
    .get('/topic/:topicID/edit', topic.showEdit)
    .post('/topic/:topicID/edit', topic.handleTopicID)
    .post('/topic/:topicID/delete', topic.hanleDelete)


module.exports = router