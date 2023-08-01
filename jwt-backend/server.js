const express = require('express');
const app = express();
const auth = require('./router/auth');
const post = require('./router/post')

app.use(express.json())
app.use('/auth', auth)
app.use('/post', post)

app.get('/', (req, res) => {
  res.send('Hello nodejs')
})


app.listen(5000, () => {
  console.log('start server ...')
})