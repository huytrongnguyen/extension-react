import express from 'express';

const app = express(),
      port = 5000;

app.listen(port, (err) => {
  err && console.log('App failed to start caused by %s', err.message);
  console.log('App is listening at port %s', port);
});

app.use('/', express.static('./docs'));
