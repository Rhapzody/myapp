function index(req, res, next) {
  //throw new Error('my err!');
  
  res.render('index', { title: 'Express' });
}
module.exports = index;