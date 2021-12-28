import * as knex from "../libs/knexClient.js";
import config from "../config/index.js";

const getCandidates = async() => {
    try {
        var fields = [
			'id',
			'first_name',
			'last_name',
            'email',
            'gender',
            'job_title',
            'avatar',
            'job_description'
        ]
        // email is a unique field
        var candidates = knex.client.select(fields).from('candidate')
        console.log(candidates.toSQL().toNative());
        return candidates
    } catch (error) {
        throw error;
    }
}

export default {getCandidates}