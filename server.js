import express from 'express';
import configuration from './data/configuration';
import cards from './data/cards';

const app = express();

// get the intended port number, use port 3000 if not provided
const port = process.env.PORT || 3000;

app.listen(port, (err) => {
  if (err) {
    console.log('App failed to start caused by %s', err.message);
  }

  console.log('App is listening at port %s', port);
});

app.use('/', express.static('./example'));

app.get('/api/configuration', (req, res) => {
  res.send(configuration);
});

app.post('/api/cards', (req, res) => {
  res.send(cards);
});
