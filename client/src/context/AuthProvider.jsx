import { useState } from "react"

import AuthContext from "context/AuthContext"

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(localStorage.getItem("jwtToken"))

  const login = token => {
    localStorage.setItem("jwtToken", token)
    setAuth(token)
  }

  const logout = () => {
    localStorage.removeItem("jwtToken")
    setAuth(null)
  }

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider