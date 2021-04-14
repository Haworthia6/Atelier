const express = require("express")
const path = require("path")
const app = express()
require("dotenv").config()
const port = process.env.PORT || 1128

// Use middleware
app.use(require("cors")())
app.use(require("morgan")("dev"))
app.use(express.json())
// app.use(express.urlencoded())
// Serve static html files
app.use(express.static(path.join(__dirname, "../public/dist")))

// Set up Routes
app.use("/", require("./routes/routes.js"))

// Make server listen
app.listen(port, () => {
  console.log("Now listening on CORS-enabled server at PORT: ", port)
})
