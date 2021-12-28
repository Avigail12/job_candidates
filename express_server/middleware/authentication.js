import jwt from 'jsonwebtoken';
import config from '../config/index.js'

const verifyToken = (req, res, next) => {

    const token = req.body.token || req.query.token || req.headers["x-access-token"] || req.headers.authorization
    
    if (!token) {
      return res.status(403).send("A token is required for authentication");
    }

    try {
      const bearer = token.split(' ');
      if(bearer[0] != "Bearer"){
        error.message = "Invalid Token";
        error.data = {status:401}
        throw error;
      }
      var tokenWithoutBearer = bearer[1]
      try {
        var decoded = jwt.verify(tokenWithoutBearer, config.express.tokenSecret);
      } catch (error) {
        throw error;
      }
    } catch (err) {
      return res.status(401).send("Invalid Token");
    }
    return next();
};

export default verifyToken;
