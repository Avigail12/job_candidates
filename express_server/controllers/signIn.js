import user from "../model/user.js"
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';
import config from '../config/index.js'

const login = async (req, res) => {

    const { username, password } = req.body

    try {
        if (!username || !password) {
          var error = {message:'Please provide username and password'}
          throw error
        }
        // check if user exists in 'user' table 
        // username not a unique field
        var usersExists = await user.getUserByUsername(username)
        if(usersExists.length < 1){
          var error = {message:'User does not exist'}
          throw error
        }
        var exsists = false
        // verify user password
        for (let i = 0; i < usersExists.length; i++) {
          if(await bcrypt.compareSync(password, usersExists[i].password)){
            exsists = true
            break;
          }
        }
        if(!exsists){
          var error = {message:'wrong password'}
          throw error
        }

        // Create token
        const token = generateAccessToken({ username: username });

        return res.status(200).json({ success: true, payload:token })
    } catch (error) {
        return res.status(400).json({ success: false, error_message: error.message })
    }
}
function generateAccessToken(username) {
  return jwt.sign(username, config.express.tokenSecret, { expiresIn: '1800s' });
}

 
export default {login}