const express = require('express')
require('dotenv').config();
const connectdb = require('./config/connectdb')
const contactRoute = require('./routes/contactRoutes')
const authRoute = require('./routes/routeuser')
const cors = require('cors')

//setting express app
const app = express()

// setting cors
app.use(cors())

//listening port
const port = process.env.PORT || 4000

// connecting to the db
connectdb()

// middleware express
app.use(express.json())

//principal path
app.use('/api/user/',contactRoute)

app.use("/auth",authRoute )


app.listen(port, (err)=>{ if (err) {console.log(err)}else{ console.log(`listening on port ${port}`)}})
