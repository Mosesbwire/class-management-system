module.exports = {
    ensureAuthenticated: function(req,res,next){
        
        if(req.isAuthenticated()){
            console.log(req.isAuthenticated())
            return next()
        }
        return res.status(401).json({message: 'Login to access this resource'})
    }

}