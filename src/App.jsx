import './App.css'

function App() {
  return (
    <main className="page-shell">
      <div className="ambient ambient-left" aria-hidden="true" />
      <div className="ambient ambient-right" aria-hidden="true" />
      <div className="spark spark-top" aria-hidden="true" />
      <div className="spark spark-bottom" aria-hidden="true" />

      <header className="topbar">
        <div className="brand">
          <img className="brand-logo" src="/logo.png" alt="Loot Foxy logo" />
        </div>

        <nav className="topbar-actions" aria-label="Account links">
          <a href="#login" className="nav-button nav-button-primary">
            Login_
          </a>
          <a href="#signup" className="nav-button nav-button-secondary">
            Signup_
          </a>
        </nav>
      </header>

      <section className="login-container" id="login">
        <div className="login-left">
          <h2 className="login-title">LOGIN</h2>
          <div className="login-field">
            <p className="login-email">EMAIL</p>
            <input type="email" className="login-input" placeholder="Enter Email" />
          </div>
          <div className="login-field">
            <p className="login-email">PASSWORD</p>
            <input type="password" className="login-input" placeholder="Enter Password" />
            <a href="#forgot" className="forgot-password">FORGOT PASSWORD?</a>
            <button className="login-button">LOGIN</button>
            <p className="continue-with">OR CONTINUE WITH</p>
            <button className="google-button">SIGN IN WITH GOOGLE</button>
            <p className="signup-text">Don't have an account? <a href="#signup">Create an account</a></p>
          </div>
        </div>
        <div className="login-right">
          <img src="/login-rightpart.png" alt="login decoration" className="login-right-image" />
        </div>
      </section>
    </main>
  )
}

export default App
