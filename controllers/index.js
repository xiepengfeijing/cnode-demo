var pool = require('./db_helper');
exports.showIndex = function(req,res){
    
    pool.query(
        'select * from `users`',
        (err,results) => {
            if(err){
                return res.send('服务器内部错误')
            }
            res.render('index.html',results);
        }
    )
    
}