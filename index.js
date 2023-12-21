const express = require('express');
const app = express();
const router = express.Router();

//Use static files
app.use(express.static('public'))

//respond with hello world to the home page
router.get('/home',(req,res) => {
    res.send('Hello, World')
})

app.use('/',router);

app.listen(3000);