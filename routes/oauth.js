const { OAuth2Client } = require('google-auth-library');
require('dotenv').config()


const getUserData = async(access_token)=>{
const response = await fetch(`https://www.googleapis.com/oauth2/v3/userinfo?access_token${access_token}`)
const data = await response.json()
console.log(data)
}

// Create a new OAuth2Client instance
const client = new OAuth2Client({
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
//   redirectUri: 'YOUR_REDIRECT_URI' // Optional, if handling callbacks
});