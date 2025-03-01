import { useContext } from "react"
import { Link, useNavigate } from "react-router-dom"

import AuthContext from "context/AuthContext"

import "./HomePage.css"

const HomePage = () => {
  const { logout } = useContext(AuthContext)
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate("/")
  }

  return (
    <div className="home-page">
      <h2>Home Page</h2>

      <div className="greet">
        You are successfully logged in!
      </div>

      <div className="buttons">
        <button className="logout-btn" onClick={handleLogout}>Log Out</button>

        <Link to="/actions">View Actions</Link>
      </div>
    </div>
  )
}

export default HomePage