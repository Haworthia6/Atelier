const express = require("express")
const path = require("path")
const app = express()

// Use middleware
app.use(require("cors")())
app.use(require("morgan")("dev"))
app.use(express.json())
// app.use(express.urlencoded())
// Serve static html files
app.use(express.static(path.join(__dirname, "../public/dist")))

// Set up Routes
app.use("/", require("./routes/routes.js"))

// export
module.exports = app;
