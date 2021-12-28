import candidate from "../model/candidate.js"
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';
import config from '../config/index.js'

const getCandidates = async (req, res) => {

    try {
        // get all candidates from candidate table
        var candidates = await candidate.getCandidates()
        console.log(candidates);
        if(candidates.length < 1){
            return res.status(200).json({ success: true, payload: 'There are no no candidates to show'})
        }

        return res.status(200).json({ success: true, payload:candidates })
    } catch (error) {
        return res.status(400).json({ success: false, error_message: error.message })
    }
}

export default {getCandidates}