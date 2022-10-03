import http from 'http';
import cors from 'cors';
import express from 'express';
import axios from 'axios';

const app = express();
const server = http.createServer(app);

const router = express.Router();

router.get('/', (req, res) => {
  res.json({message: 'Hello Wolrd'}).status(200);
});

router.get('/message', (req, res) => {
  axios.get('http://localhost:5001/messages')
    .then(request => res.json(request.data).status(200))
    .catch(err => res.json(err).status(400))
});

router.post('/message', (req, res) => {
  axios.post('http://localhost:5001/messages', {
    body: req.body.sendMessage,
    user: req.body.sendUser
  })
    .then(_ => res.json({message: 'success'}).status(200))
    .catch(err => res.json(err).status(400))
});

app.use(express.json())
app.use(cors());
app.use(router);

server.listen(5000);