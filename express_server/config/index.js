import env from 'dotenv-defaults'
import dotenvParseVariables from 'dotenv-parse-variables';

let baseEnv = env.config();
let parsedEnv = dotenvParseVariables(baseEnv.parsed);

export default {
    sqlite: {
        filename: parsedEnv.FILE_NAME,
    },
	express: {
        port: parsedEnv.PORT,
        tokenSecret: parsedEnv.TOKEN_SECRET,
        ssl:parsedEnv.SSL,
        keyFileLocation: parsedEnv.KEY_FILE,
        sertFileLocation: parsedEnv.SERT_FILE,
    },
}