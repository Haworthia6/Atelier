const app = require('./server.js');
require("dotenv").config()
const port = process.env.PORT || 1128

app.listen(port, () => {
  console.log("Now listening on CORS-enabled server at PORT: ", port)
})
