import * as knex from './knexClient.js';

/**
 * Bootstrap function to run preservice actions 
 * @param {*} options 
 */
const bootstrap = async (options) => {
    try {
        //add bootstrap functions here
        await knex.connect();
    } catch (err) {
        throw err;
    }
}

export default bootstrap