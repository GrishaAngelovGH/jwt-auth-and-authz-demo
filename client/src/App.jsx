import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"

import LoginPage from "components/pages/LoginPage"
import HomePage from "components/pages/HomePage/HomePage"

import AuthProvider from "context/AuthProvider"

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App
