const express = require('express');
const path = require('path');

const apiRouter = require('./routes/api');

const app = express();
app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.resolve(__dirname, './client/build')));

app.use('/api', apiRouter);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './client/build', 'index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Listening on ${port}`);