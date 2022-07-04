/**
 * Create a connection fxn to mongodb
 * start a local mongodb server connection
 */

const mongoose = require('mongoose');

require('dotenv').config();

 
const { MONGO_URI } = process.env;


// const connectDB = () => {
//     mongoose.connect(MONGO_URL, {
//         udeNewUrlParse: true,
//         useCreateIndex: true,
//         useUnifiedTopology: true,
//         useFindandModify: false
//     })
//     .then(() => {
//         console.log("MongoDB connected...")

//     })
//     .catch((err) => {
//         console.error(err.message);

//         process.exit(1);
//     })
// }

const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,  
        });

        console.log("mongoDB connected....")
    } catch (error) {
       console.error(error);
       
       process.exit(1);
    }
}

module.exports = connectDB;