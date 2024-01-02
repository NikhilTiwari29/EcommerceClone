const express = require("express");
const app = express();
const dotenv = require("dotenv");
const connectDb = require("./config/dbConfig");
const userRoute = require("./routes/userRoute");

dotenv.config();

connectDb();

app.use(express.json()); // Add parentheses to use express.json()

// Use the users route
app.use("/api/v1/auth", userRoute);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`App is running on port: ${PORT}`);
});
