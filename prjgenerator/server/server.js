const express = require("express")
require('dotenv').config();

const testRoute = require("./routes/testRoutes");
const generateRoute = require("./routes/generateRoute");

const app = express();
app.use(express.json());

app.use("/api", testRoute);
app.use("/api", generateRoute);

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server running on port ${process.env.PORT || 3000}`);
});
