var pool = require('./db_helper.js')
var md5 = require('md5')
exports.showSignIn = (req,res) => {
    res.render('signin.html')
}
exports.handleSignIn = (req,res) => {
    //处理用户提交的信息是否正确
    //验证邮箱是否存在
    pool.query(
        "select * from `users` where `email`=?",
        req.body.email,
        (err,results) => {
            if(err){
                return res.send(err);
            }
            if(results.length < 1){
                res.json({
                    code:401,
                    msg:'邮箱地址不存在'
                })
                return;
            }
            req.body.password = md5(req.body.password);
            pool.query(
                "select * from `users` where `password` = ?",
                req.body.password,
                (err,results) => {
                    if(err){
                        return res.send(err);
                    }
                    if(results.length < 1){
                        res.json({
                            code:402,
                            msg:'密码输入错误'
                        })
                        return
                    }
                    res.json({
                        code:200,
                        msg:'登录成功'
                    })
                   
                }
            )
        }
    )
    //验证密码是否正确
}
exports.showSignUp = (req,res) => {
    res.render('signup.html');
}
exports.handleSignUp = (req,res) => {
    pool.query(
        "select * from `users` where `email` = ?",
        req.body.email,
        (err,results) => {
            if(err){
                return res.send('服务器内部错误');
            }
            if(results.length > 0){
                res.render('signup.html',{
                    msg:"邮箱地址已被占用"
                })
                return;
            }
            pool.query(
                'select * from `users` where `nickname` = ?',
                req.body.nickname,
                (err,results) => {
                    if(err){
                        return res.send('服务器内部错误');
                    }
                    if(results.length > 0){
                        res.render('signup.html',{
                            msg:"用户名已被占用"
                        })
                        return;
                    }
                    req.body.createdAt = new Date();
                    req.body.password = md5(req.body.password)
                    pool.query(
                        'insert into `users` set ?',
                        req.body,
                        (err,results) => {
                            if(err){
                                return res.send('服务器内部错误')
                            }
                            if(results.affectedRows == 1){
                                res.redirect('/login')
                            } else {
                                res.render('signup.html',{
                                    msg:"注册失败"
                                })
                            }
                        }
                        
                    )
                }
            )

        }
    )

}
exports.handleSignOut = (req,res) => {

}