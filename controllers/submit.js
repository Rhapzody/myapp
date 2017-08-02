var con = require('../models/db-config');
var valid = require('validator');
function submit(req, res){
    if(!valid.isEmail(req.body.email)) return res.render('users-login',{errMessage:'email ไม่ถูกก้อง'});
    var sql = 'SELECT u_email, u_pw, u_rname FROM user WHERE u_email=\''+req.body.email
        +'\' AND u_pw=\''+req.body.password+'\'';
    con.query(sql, function (err, rows, fields) {
        if (err) throw err
        console.log('number of row : ',rows.length);
        if (rows.length != 0){
            req.session.email = rows[0].u_email;
            req.session.password = rows[0].u_pw;
            req.session.name = rows[0].u_rname;
            console.log(req.session.email);
            res.redirect('/users/info');
        }else{
            res.render('users-login',{errMessage:'email หรือ password ไม่ถูกก้อง'});
        }
    })
}
module.exports = submit;