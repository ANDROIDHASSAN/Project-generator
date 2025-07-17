const express = require("express");
const cors = require("cors");
require('dotenv').config();

const testRoute = require("./routes/testRoutes");
const generateRoute = require("./routes/generateRoute");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", testRoute);
app.use("/api", generateRoute);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
