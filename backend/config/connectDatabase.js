const mongoose = require('mongoose')

const connectDB = ()=>{
    mongoose.connect(process.env.MONGO_URI).then((conn)=>{
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    })

}
module.exports = connectDB