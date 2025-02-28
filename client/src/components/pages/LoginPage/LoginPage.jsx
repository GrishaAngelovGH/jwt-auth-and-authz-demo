import "./LoginPage.css"

const LoginPage = () => {
  return (
    <div className="page">
      <form>
        <label>
          <div>Email</div>
          <input type="email" name="email" placeholder="Enter Email" className="form-control" required />
        </label>
        <label>
          <div>Password</div>
          <input type="password" name="password" placeholder="Enter Password" className="form-control" required />
        </label>

        <button type="submit">Log In</button>
      </form>
    </div>
  )
}

export default LoginPage