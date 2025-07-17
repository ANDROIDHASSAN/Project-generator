const express = require("express")
const route = express.Router();

const python = {
    idea1: "Simple calculator",
    idea2: "Simple GUI",
    idea3: "Simple chatbot",
    idea4: "Simple Brain Tumour Detection",
    idea5: "Simple Image Detection",
};

route.post("/generate",(req,res)=>{
    const body = req.body.techstack;
    if(body === "python")
    {
        res.send(python)
    }
})

module.exports = route;
