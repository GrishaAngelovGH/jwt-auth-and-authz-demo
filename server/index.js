const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const jwt = require("jsonwebtoken")

const app = express()
app.use(bodyParser.json())
app.use(cors())

const port = 3000

const SECRET_KEY = "SECRET_KEY_12345"

const authenticateJWT = (req, res, next) => {
  const token = req.headers.authorization && req.headers.authorization.split(' ')[1]

  if (!token) {
    return res.status(401).json({ message: 'Access token is missing or invalid' })
  }

  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'Token is invalid or expired' })
    }
    req.user = user // Store user data in request object
    next() // Proceed to the next middleware/route handler
  })
}

const users = [
  { id: 1, email: "user@example.com", password: "password123" }
]

app.post("/login", (req, res) => {
  const { email, password } = req.body

  const user = users.find(u => u.email === email && u.password === password)

  if (user) {
    const token = jwt.sign(
      {
        userId: user.id,
        email: user.email
      },
      SECRET_KEY,
      {
        expiresIn: '1m'
      }
    )

    res.status(200).json({ token })
  } else {
    res.status(401).json({ error: "Invalid email or password" })
  }
})

app.get('/action', authenticateJWT, (req, res) => {
  res.json({ message: 'This is an action from protected endpoint', user: req.user })
})

app.listen(port, () => {
  console.log(`The server listening on port ${port}`)
})