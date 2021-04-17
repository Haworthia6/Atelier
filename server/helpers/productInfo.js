const axios = require('axios')
require('dotenv').config()

module.exports = (id) => {
  return axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products/${id}`,
  {
    headers: {
      Authorization: process.env.API_KEY
    }
  })
}
