import config from "../config/index.js";

function createuser(params){
    var user = {}
    try {
        user.username = params.username
        user.password = params.password
        user.email = params.email.toLowerCase()

        return user;
    } catch (error) {
        throw error;
    }
}

export default {createuser}