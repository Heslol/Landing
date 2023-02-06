const dotenv = require('dotenv')
dotenv.config();
const express = require('express');
const mongoose = require('mongoose')
mongoose.set('strictQuery', true)
const cors = require('cors');
const cookieParser = require('cookie-parser');
const router = require('./router/router');

const app = express();
const port  = 4444; 

app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use('/api', router);

const start = async() => {
    try {
        await mongoose
                    .connect('mongodb+srv://Heslol:Nordbankarena@cluster0.uomixdf.mongodb.net/test?retryWrites=true&w=majority')
                    .then(() => console.log('DB is ok'))
                    .catch((err) => console.log(err));
                ;
        app.listen(port, () => {
            console.log(`This server started on PORT ${port}`)
        })
    } catch (error) {
        console.log(error)
    }
}

start()

