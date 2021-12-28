import express from "express";
import candidates from '../controllers/candidates.js'
import auth from '../middleware/authentication.js'


const router = express.Router();

router.use(auth)
router.route('/').get(candidates.getCandidates)

export default router