module.exports = {
    ensureAuthenticated: function(req,res,next){
        
        if(req.isAuthenticated){

            return next()
        }

        res.status(401).json({message: 'Login to access this resource'})
    }

}