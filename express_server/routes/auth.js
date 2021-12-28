import express from "express";
import singUp from '../controllers/signUp.js'
import signIn from '../controllers/signIn.js'


const router = express.Router();

router.route('/signup').post(singUp.register)
router.route('/signin').post(signIn.login)

export default router