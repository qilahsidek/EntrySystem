const express = require("express");
const mongoose = require("mongoose");
const app = express();
//const bodyParser = require("body-parser");
require('dotenv').config();
const guestRoute = require('./routes/guest');

const PORT = process.env.PORT || 5000;

//middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//routes
app.use('/api/guest', guestRoute);

//connect to mongodb
mongoose.connect(
    process.env.MONGO_URL, 
    {useNewUrlParser: true}
    )
    .then(() => {
        console.log("Connected to MongoDb");
    })
    .catch(err => { 
        console.error("Error while connecting to the MongoDb", err);
    });

/*app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Hello World');
});


app.post('/entry', (req, res) => {
  console.log(req.body)
  res.send('Hello world');
});*/

//start server
app.listen(PORT, () => {
    console.log(`Listening on ${ PORT }`);
})
