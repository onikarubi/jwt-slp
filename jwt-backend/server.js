const express = require('express');
const app = express();
const auth = require('./router/auth');
const post = require('./router/post')
const cors = require('cors');

app.use(cors({
  origin: 'http://localhost:3001',
}))

app.use(express.json())
app.use('/auth', auth)
app.use('/post', post)

app.get('/', (req, res) => {
  res.send('Hello nodejs')
})


app.listen(5000, () => {
  console.log('start server ...')
})