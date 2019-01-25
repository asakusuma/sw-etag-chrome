module.exports = function() {
  const express = require('express');
  const fs = require('fs');
  const app = express();
  const port = 3000;

  app.use(express.static('static'));

  const swSource = fs.readFileSync('./sources/sw.js', 'utf8');

  app.get('/sw.js', function (req, res) {
    res.set('Content-Type', 'text/javascript');
    res.set('ETag', `W/"etag-ua-${req.headers['user-agent']}"`);

    console.log('ifNoneMatched', req.get('If-None-Match'));
    res.send(swSource);
    res.end();
  });

  app.listen(port, () => console.log(`Clear-Site-Data test app running on port ${port}!`));
}