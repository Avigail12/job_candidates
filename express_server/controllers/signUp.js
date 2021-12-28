import userRepo from "../repositories/userRepository.js"
import user from "../model/user.js"
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';
import config from '../config/index.js'

const register = async (req, res) => {

    const { username, email, password } = req.body

    try {
        if (!username || !password) {
          var error = {message:'Please provide username and password'}
          throw error
        }
        if (!email) {
          var error = {message:'Please provide email'}
          throw error
        }
          // email is a unique field
        var userExists = await user.getUserByEmail(email)
        if(userExists){
          var error = {message:'User already exists'}
          throw error
        }

        // create user object
        var userObj = userRepo.createuser(req.body);
        var salt = await bcrypt.genSaltSync(10);
        userObj.password = await bcrypt.hashSync(password, salt);

        // Create token
        const token = generateAccessToken({ username: username });
        // Create token
        var insert = await user.insertUser(userObj)


        return res.status(200).json({ success: true, payload:token })
    } catch (error) {
      console.log(error);
        return res.status(400).json({ success: false, error_message: error.message })
    }
}

function generateAccessToken(username) {
  return jwt.sign(username, config.express.tokenSecret, { expiresIn: '1800s' });
}

 export default {register}