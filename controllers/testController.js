const cloudinaryUpload = require("../cloudinary")


module.exports = {

   testCloudinary : async(req,res)=>{
   try {
   const uploadedResponse = await cloudinaryUpload(req.file.path)
   res.send(uploadedResponse)
   } catch (error) {
    console.log(error)
   }
  
  },
   
   getHome:(req,res)=>{
    res.send("puta vercel una mama")
   }, 

//    testAuth :(req,res)=>{


// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const { OAuth2Client } = require('google-auth-library');

// const app = express();
// const PORT = process.env.PORT || 5000;

// app.use(bodyParser.json());
// app.use(cors());


// const googleClient = new OAuth2Client('YOUR_CLIENT_ID');


// app.post('/api/auth/google', async (req, res) => {
//   const { tokenId } = req.body;

//   try {
//     const ticket = await googleClient.verifyIdToken({
//       idToken: tokenId,
//       audience: 'YOUR_CLIENT_ID',
//     });

//     const payload = ticket.getPayload();
//     const userId = payload['sub'];

  
//     res.status(200).json({ user: payload });
//   } catch (error) {
//     console.error('Google authentication error:', error);
//     res.status(401).json({ error: 'Google authentication failed' });
//   }
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// })

//    }
}

