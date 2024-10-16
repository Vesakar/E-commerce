const express = require('express')
const app = express()
const dotenv = require("dotenv")
const path = require("path")
const cors = require("cors")
dotenv.config({path: path.join(__dirname,'config','.env')})
const PORT = process.env.PORT  || 5000
const connectDB = require('./config/connectDatabase')
connectDB()

app.use(express.json())

app.use(cors())
app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const productRoutes = require('./routes/productRoutes')
const orderRoutes = require('./routes/orderRoutes')

app.use('/api/v1/',productRoutes)

app.use('/api/v1/',orderRoutes)



app.listen(PORT, ()=>{
    console.log(`server running on PORT ${PORT}`)
})