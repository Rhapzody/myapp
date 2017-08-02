function userInfo(req,res){
    if(req.session.name === undefined){
        res.redirect('/users/login');
    }else{
        res.render('users-info',{
            title : 'Welcom '+req.session.name
        });
    }
}
module.exports = userInfo;//