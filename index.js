const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://alstjddk5:<cjswo1799>@cluster0.s98hzjp.mongodb.net/?retryWrites=true&w=majority').then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err))

app.get('/', (req, res) => res.send("Hello world"));

app.listen(port, () => console.log(`Example app listening on port ${port}`));



