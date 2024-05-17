const express = require("express")
const app = express()
const user = require("../routes/user")
require('dotenv').config()
const cors = require('cors')

const { OAuth2Client } = require('google-auth-library');

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.set("view engine", "ejs")
app.use("/public/uploads", express.static("public"))

app.use(cors(
    {
        origin:[ 'http://localhost:3004'],
        methods:['POST','GET','PUT','DELETE'],
        credentials:true
    }
))
app.use(user)



// Create a new OAuth2Client instance
const client = new OAuth2Client({
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  redirectUri: 'http://localhost:7000/oauth' 
});

// Route for initiating Google OAuth2 flow
app.get('/google', (req, res) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3004')
    res.header('Referrer-Policy', 'no-referrer-when-downgrade')
  const authUrl = client.generateAuthUrl({
    access_type: 'offline',
    scope: ['profile', 'email'], 
    prompt: 'consent'
  });
//   console.log(authUrl)
  res.json({authUrl});
});
 

// Route for handling callback from Google OAuth2
app.get('/oauth', async (req, res) => {
  const { code } = req.query; 
  console.log(code)
  try {
    // Exchange authorization code for access token
    const { tokens } = await client.getToken(code);
    // Set access token for OAuth2Client instance
     client.setCredentials(tokens);
    // Get user info from Google
    const { data } = await client.request({
      url: 'https://www.googleapis.com/oauth2/v2/userinfo'
    });

    // Check if user already exists in database
    // let user = await User.findOne({ googleId: data.id });

    // if (!user) {
    //   user = await User.create({
    //     googleId: data.id,
    //     name: data.name,
    //     email: data.email
    //   });
    // }

    // Redirect to dashboard or home page
    // res.redirect('/');
    console.log(data)
  } catch (error) {
    console.error('Error during Google authentication:', error);
    res.status(500).send('Internal Server Error');
  }
});





app.listen(1000, (err)=>{
    if (err) {
        console.log(err);
    }else{
        console.log("server started on port 7000");
    }
})