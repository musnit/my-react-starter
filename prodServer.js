var express = require('express');

var app = express();

// serve the files out of ./dist as our main files
app.use(express.static('dist'));

app.all('*', function(req, res) {
    res.sendFile('dist/index.html', { root: __dirname });
});

app.listen(80, '0.0.0.0', function() {
  console.log('server starting');
});
