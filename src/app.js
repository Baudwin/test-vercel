const express = require("express")
const app = express()
const user = require("../routes/user")

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.set("view engine", "ejs")
app.use("/public", express.static("public"))

app.use=(user)


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