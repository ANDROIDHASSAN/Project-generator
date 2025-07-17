const express = require("express");
const router = express.Router();

const python = {
    idea1: "Simple calculator",
    idea2: "Simple GUI",
    idea3: "Simple chatbot",
    idea4: "Simple Brain Tumour Detection",
    idea5: "Simple Image Detection",
};

router.post("/generate", (req, res) => {
    const { techstack } = req.body;

    if (!techstack) {
        return res.status(400).json({ error: "Tech stack is required!" });
    }

    if (techstack.toLowerCase() === "python") {
        return res.json(python);
    } else {
        return res.status(404).json({ error: "Tech stack not supported." });
    }
});

module.exports = router;
