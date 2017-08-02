function logout(req, res){
    req.session.destroy();
    res.redirect('/users/login');
}
module.exports = logout;