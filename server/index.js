const express = require("express")
const cors = require('cors')
const bodyParser = require("body-parser")

const app = express()
app.use(bodyParser.json())
app.use(cors())

const port = 3000

const users = [
  { id: 1, email: "user@example.com", password: "password123" }
]

app.post("/login", (req, res) => {
  const { email, password } = req.body

  const user = users.find(u => u.email === email && u.password === password)

  if (user) {
    res.status(200).json({ message: "Login successful" })
  } else {
    res.status(401).json({ error: "Invalid email or password" })
  }
})

app.listen(port, () => {
  console.log(`The server listening on port ${port}`)
})