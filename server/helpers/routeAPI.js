
// Calls passed in apiRequest
module.exports = (id, apiRequest, req, res) => {
  apiRequest(id)
    .then(({ data }) => res.send(data))
    .catch((err) => {
      console.error(err);
      res.status(400).send('It\'s always your fault and never our fault');
    });
};