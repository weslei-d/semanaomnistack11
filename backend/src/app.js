const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate')
const routes = require('./routes');

const app = express();

const PORT = process.env.PORT || 8877;

app.listen(PORT, () => {
  console.log('escutando na porta: '+ PORT);
})

app.get('/', (req, res) => {
  res.json({
    msg: 'OK'
  })
})

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());

module.exports = app;
