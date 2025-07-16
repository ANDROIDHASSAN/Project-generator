import express from "express"
const app = express()
app.get("/",function(req,res){
    res.send("hi")
})

app.listen(3000)