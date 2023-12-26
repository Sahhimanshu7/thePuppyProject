const express = require('express');
const router = express.Router();

// let transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       type: 'OAuth2',
//       user: process.env.MAIL_USERNAME,
//       pass: process.env.MAIL_PASSWORD,
//       clientId: process.env.OAUTH_CLIENTID,
//       clientSecret: process.env.OAUTH_CLIENT_SECRET,
//       refreshToken: process.env.OAUTH_REFRESH_TOKEN
//     }
//   });
  
router.post('/', (req,res)=>{
    console.log(req.body);
    res.send('Contact send!');
});

module.exports = router;