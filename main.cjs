const express = require('express');
const path = require('path');

const app = express()
const port = 3000

app.get('/lib.js', function(req, res) {
    res.sendFile(path.join(__dirname, '/lib.js'));
  });

  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index_cjs.html'));
    //res.sendFile(path.join(__dirname, '/index_esm.html'));
})
app.get('/esm', (req, res) => {
    res.sendFile(path.join(__dirname, '/index_esm.html'));
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})