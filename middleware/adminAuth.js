function accountConnected(req, res, next){
   if(req.session.user && !req.session.user.isAdmin){
      if(req.session.user){
         return res.redirect("/");
      }
      else{
         return res.redirect("/Register");
      }
   }
   next();
}

module.exports = accountConnected;