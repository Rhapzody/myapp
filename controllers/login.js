function login(req, res){
        if(req.session.name !== undefined){
                return res.redirect('/users/info');
        }
        res.render('users-login');
}
module.exports = login;