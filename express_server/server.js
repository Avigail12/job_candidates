import express from "express";
import config from "./config/index.js";
import bootstrap from './libs/bootstrap.js'
import auth from './routes/auth.js'
import candidate from './routes/candidate.js'
import cors from 'cors'
import fs from 'fs'

const start = async () => {
    try {
        await bootstrap();
    } catch (err) {
        console.log('');
    }
}

//start service
await start();

const app = express();

app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(cors())

app.use('/api/auth/', auth)
app.use('/api/candidates/', candidate)
 
// set port, listen for requests
try {
    if(config.express.ssl){
        if (!config.express.hasOwnProperty('keyFileLocation') & !config.express.hasOwnProperty('sertFileLocation')) {
            var error = {message: "keyFileLocation or sertFileLocation is a required field", data:{status:400}}
            throw error;
        }
        if (!fs.existsSync(config.express.keyFileLocation) | !fs.existsSync(config.express.sertFileLocation)) {
            var error = {message: "keyFile or sertFile does not exists", data:{status:400}}
            throw error;
        }
        https.createServer({
            key: fs.readFileSync(config.express.keyFileLocation, 'utf8'),
            cert: fs.readFileSync(config.express.sertFileLocation, 'utf8')
        }, app).listen(config.express.port, () => {
            console.log(`Server is running on port https://localhost:${config.express.port}`)
        })  
    }
    else{
        app.listen(config.express.port,(req,res) => {
            console.log(`Server is running on port http://localhost:${config.express.port}`)
        }) 
    }
} catch (error) {
    console.log(error);
}

// app.listen(config.express.port, () => {
//     console.log(`Server is running on port ${config.express.port}.`);
// });
