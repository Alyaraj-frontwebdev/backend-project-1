const mongoose = require("mongoose");

async function ConnectDB() {
    await mongoose.connect(process.env["MONGO_DB_URI"]);
    console.log("Connected to MongoDB");
}

module.exports = ConnectDB;