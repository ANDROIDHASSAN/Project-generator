// const express = require("express")
// const router = express.Router()

// router.get("/test",(req,res)=>{
//     res.send("Just testing")
// })

// module.exports = router

const express = require("express");
const router = express.Router();

router.get("/test", (req, res) => {
    res.send("🚀 Server is working fine!");
});

module.exports = router;
