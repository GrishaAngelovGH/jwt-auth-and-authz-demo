import { useState, useContext } from "react"

import AuthContext from "context/AuthContext"

const ActionsPage = () => {
  const [message, setMessage] = useState("")
  const { auth } = useContext(AuthContext)

  const fetchProtectedData = async () => {
    try {
      const response = await fetch("http://localhost:3000/action", {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${auth}`,
          "Content-Type": "application/json",
        },
      })

      if (response.ok) {
        const { message, user } = await response.json()
        setMessage(`${user.email}: ${message}`)
      } else {
        console.error("Error:", response.statusText)
      }
    } catch (error) {
      console.error("Network Error:", error)
    }
  }

  return (
    <div className="page flex-column">
      <h1>Actions Page</h1>
      <button onClick={fetchProtectedData}>Perform Action</button>
      {
        message.length > 0 && (
          <p>{message}</p>
        )
      }
    </div>
  )
}

export default ActionsPage