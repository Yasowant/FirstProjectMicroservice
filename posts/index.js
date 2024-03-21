const express = require('express');
const bodyParser = require('body-parser');
const { randomBytes } = require('crypto');
const app = express();
const cors = require('cors');

app.use(bodyParser.json());
app.use(cors());

const posts = {};

app.get('/posts', (req, res) => {
  res.send(posts);
});

app.post('/posts', (req, res) => {
  const id = randomBytes(4).toString('hex');
  const { title } = req.body;
  posts[id] = {
    id,
    title,
  };
  res.status(201).send(posts[id]); // Sending a 201 Created status and the created post
});

app.listen(4000, () => {
  console.log('Listening on port 4000');
});
