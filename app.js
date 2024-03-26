const express = require("express")
const app = express()

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.set("view engine", "ejs")
app.use(express.static("public"))




app.get("/", async(req,res)=>{
    res.send("hello vercel")

})





app.listen(7000, (err)=>{
    if (err) {
        console.log(err);
    }else{
        console.log("server started on port 7000");
    }
})