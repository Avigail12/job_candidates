import * as knex from "../libs/knexClient.js";
import config from "../config/index.js";

const getUserByEmail = async(email) => {
    try {
        // email is a unique field
        var user = knex.client.select('*').from('user').where('email',email).first()
        console.log(user.toSQL().toNative());
        return user
    } catch (error) {
        throw error;
    }
}
const getUserByUsername = async(username) => {
    try {
        // username not a unique field
        var user = knex.client.select('*').from('user').where('username',username)
        console.log(user.toSQL().toNative());
        return user
    } catch (error) {
        throw error;
    }
}
const insertUser = async(user) => {
    try {
        var queryBuilder = knex.client('user').insert(user)
        console.log(queryBuilder.toSQL().toNative());
        return queryBuilder
    } catch (error) {
        throw error;
    }
}
export default {getUserByEmail,getUserByUsername,insertUser}