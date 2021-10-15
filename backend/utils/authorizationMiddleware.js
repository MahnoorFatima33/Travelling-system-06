const jwt = require('jsonwebtoken');

function validateToken(req, res, next) {

    const token = req.headers.authorization;
    const tokenParts = token.split(' ');
    if (!tokenParts[1]) {
    
    return res.status(401).json({ message: 'No token provided' });
    
    }
    jwt.verify(tokenParts[1], "dfjfjdjfdjhfh,", (err, decoded) => {
    
    if (err) {
    
    return res.status(403).json({ message: 'Failed to authenticate token' });
    
    }
    else{
  
    // If the token is valid, save the decoded information for later use
    req.user = decoded;


 
    
    



        
    
    next();
    }
  
    
    });
    
    }

    function requireRoles(roles) {
   
        return (req, res, next) => {
   
        const userRole = req.user.role; // Assuming you saved the user's role in req.user

     
        if (roles.includes(userRole) ) {
           
        
        // User has one of the required roles, so allow access
        next();
       
        
        } else {
        
        // User does not have any of the required roles, so send a forbidden response
    
        res.status(403).json({ message : "permission denied" });
    
        }
    
        };
        
        }

module.exports={validateToken,requireRoles};