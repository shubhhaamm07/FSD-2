function Login() {
  return (
    <div className="login-page">
      <div className="login-card">
        <div className="icon">🔐</div>
        <h2>Welcome Back Shubham Rana</h2>
        <p className="subtitle">Sign in to continue</p>

        <form>
          <div className="field">
            <label>Email Address</label>
            <input type="email" placeholder="Enter your email" />
          </div>

          <div className="field">
            <label>Password</label>
            <input type="password" placeholder="Enter your password" />
          </div>

          <button type="submit">LOGIN</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
