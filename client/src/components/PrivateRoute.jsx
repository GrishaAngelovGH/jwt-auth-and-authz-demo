import { useContext, useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { jwtDecode } from "jwt-decode"
import AuthContext from "context/AuthContext"

/*
This implementation performs a series of essential checks: 
- it verifies if a valid and non-expired token is present

- triggers a logout action and invalidates the session if the token is expired

- dynamically redirects unauthorized or logged-out users to the login page 
  for secure route protection.
*/

const PrivateRoute = ({ children }) => {
  const [isTokenValid, setIsTokenValid] = useState(true)

  const { auth, logout } = useContext(AuthContext)

  const location = useLocation()

  useEffect(() => {
    if (auth) {
      const isTokenExpired = (token) => {
        const { exp } = jwtDecode(token)
        return Date.now() >= exp * 1000
      };

      if (isTokenExpired(auth)) {
        alert("Your session has expired. Please log in again.")
        logout()
        setIsTokenValid(false)
      }
    }
  }, [auth, location])

  if (!auth || !isTokenValid) {
    return <Navigate to="/" />
  }

  return children
}

export default PrivateRoute