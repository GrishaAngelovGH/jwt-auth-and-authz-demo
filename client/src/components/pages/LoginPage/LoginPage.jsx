import { useState } from "react"

import "./LoginPage.css"

const LoginPage = () => {
  const [email, setEmail] = useState("user@example.com")
  const [password, setPassword] = useState("password123")

  const handleSubmitForm = async e => {
    e.preventDefault()
    const formData = new FormData(e.target)

    /*
      When using FormData directly in a fetch request, the data is sent in a multipart/form-data format. 
      This format is typically used for file uploads and more complex forms. 
      However, if the server is expecting JSON data, it won"t parse multipart/form-data by default, 
      which is why the fields were missing from req.body.
    
      By converting the FormData to a JSON object and setting the Content-Type to application/json, 
      we align the data format with what the server expects, ensuring that the request body is parsed correctly.
    */

    const data = {
      email: formData.get("email"),
      password: formData.get("password"),
    }

    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })

      if (response.ok) {
        alert("Successful Login!")
      } else {
        /*
          When a client receives a 401 Unauthorized response, the catch block is typically called 
          if there is a network error or an exception during the fetch request. 
          However, a 401 response itself is not considered a network error—it is a valid HTTP 
          response indicating that the request was not authorized.
        */

        const { error } = await response.json()
        alert(error)
      }
    } catch (error) {
      console.error("Error:", error)
    }
  }

  const handleEmailChange = ({ target: { value } }) => {
    setEmail(value)
  }

  const handlePasswordChange = ({ target: { value } }) => {
    setPassword(value)
  }

  return (
    <div className="page">
      <form onSubmit={handleSubmitForm}>
        <label>
          <div>Email</div>
          <input
            type="email"
            name="email"
            value={email}
            placeholder="Enter Email"
            className="form-control"
            onChange={handleEmailChange}
            required
          />
        </label>
        <label>
          <div>Password</div>
          <input
            type="password"
            name="password"
            value={password}
            placeholder="Enter Password"
            className="form-control"
            onChange={handlePasswordChange}
            required
          />
        </label>

        <button type="submit">Log In</button>
      </form>
    </div>
  )
}

export default LoginPage