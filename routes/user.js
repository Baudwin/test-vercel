const router = require('express').Router()

router.get("/", async(req,res)=>{
    res.send("hello vercel")

})



module.exports = router