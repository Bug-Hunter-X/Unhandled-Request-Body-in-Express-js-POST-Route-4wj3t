const express = require('express');
const app = express();
app.use(express.json());
app.post('/user', (req, res) => {
  if (!req.body) {
    return res.status(400).send({ error: 'Request body is missing' });
  }
  try {
    console.log(req.body);
    // Process req.body safely
    res.status(201).send();
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: 'Internal server error' });
  }
});
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});