import { useContext } from "react"

import AuthContext from "context/AuthContext"

import { Navigate } from "react-router-dom"

import { jwtDecode } from "jwt-decode"

const PrivateRoute = ({ children }) => {
  const { auth, logout } = useContext(AuthContext)

  const isTokenExpired = (token) => {
    const { exp } = jwtDecode(token)
    return Date.now() >= exp * 1000
  }

  if (auth && isTokenExpired(auth)) {
    alert("Your session has expired. Please log in again.")
    logout()
    return <Navigate to="/" />
  }

  return auth ? children : <Navigate to="/" />
}

export default PrivateRoute