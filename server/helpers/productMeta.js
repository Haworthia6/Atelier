const axios = require('axios')
require('dotenv').config()

module.exports = (id) => {
  return axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/reviews/meta`, {
    params: {
      'product_id': id
    },
    headers: {
      Authorization: process.env.API_KEY
    }
  })
}
