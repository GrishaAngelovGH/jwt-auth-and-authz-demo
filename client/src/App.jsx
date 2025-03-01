import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"

import LoginPage from "components/pages/LoginPage"
import HomePage from "components/pages/HomePage/HomePage"

import PrivateRoute from "components/PrivateRoute"

import AuthProvider from "context/AuthProvider"

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<PrivateRoute><HomePage /></PrivateRoute>} />
        </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App
