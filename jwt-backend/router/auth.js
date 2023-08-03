const router = require('express').Router()
const { body, validationResult } = require('express-validator');
const { User } = require('../db/User')
const bcrypt = require('bcrypt')
const JWT = require('jsonwebtoken')

const SECRET_KEY = process.env.JWT_SECRET_KEY || "default_secret_key";

const generateToken = (email) => {
  return JWT.sign({ email }, SECRET_KEY, { expiresIn: "24h" });
}

const validateRequest = (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
}

router.get('/', (req, res) => {
  res.send('Hello Authjs')
})

router.post('/register', body("email").isEmail(), body("password").isLength({ min: 6 }), async (req, res) => {
  validateRequest(req, res);

  const { email, password } = req.body;

  const user = User.find((user) => user.email === email)
  if (user) {
    return res.status(400).json({ message: 'すでにそのユーザーは存在しています' });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  User.push({ email, password: hashedPassword });

  const token = generateToken(email);

  return res.json({ token });
})

router.post('/login', async (req, res) => {
  const { email, password } = req.body
  const user = User.find((user) => user.email == email)

  if (!user) {
    return res.status(400).json({ message: "そのユーザーは存在しません。" });
  }

  const isMatch = await bcrypt.compare(password, user.password)
  if (!isMatch) {
    return res.status(400).json({ message: 'パスワードが異なります' });
  }

  const token = generateToken(email);

  return res.json({ token });
})

router.get('/allUsers', (req, res) => {
  return res.json(User)
})

module.exports = router;
