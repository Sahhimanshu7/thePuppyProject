const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require('body-parser');

const PORT = 3000;

const contactUs = require('./routes/contactUs');

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Use static files
app.use(express.static('public'))

app.use('/api/contact-us', contactUs);

//respond with hello world to the home page
router.get('/home',(req,res) => {
    res.send('Hello, World')
})

app.use('/',router);

app.listen(PORT, function(err){
    if(err) console.log("There was an error running the server",
    err);
    console.log("Server listening on PORT: ", PORT);
});