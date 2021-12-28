import knex from 'knex';
import config from '../config/index.js'

//exported knex client
export let client;

/**
 * Connect to sqlite3 
 * 
 * @params void
 * @return void
 */
export const connect = async () => {
    try {

        client = knex({
            client: 'sqlite3',
            connection: {
                filename: config.sqlite.filename
            }
        });
        console.log("connected to sqlite DB")
    } catch (err) {
        throw err;
    }
}

