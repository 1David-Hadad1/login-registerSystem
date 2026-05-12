function accountConnected(req, res, next){
   if(!req.session.user){
      return res.redirect("/register");
   }
   next();
}

module.exports = accountConnected;