'use strict';

const express = require('express');
const path = require('path');
const app = express();
const staticMiddleWare = express.static('dist');

// app.use('/dist', express.static(path.resolve(__dirname, '..', 'dist')));
app.use('/js', express.static(__dirname + '/js'));
app.use(staticMiddleWare);

app.listen(7979, () => {
  console.log('example server listen port 7979');
});