import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">Kautrix</h2>

      <div className="links">
        <a href="#">Features</a>
        <a href="#">AI</a>
        <a href="#">Pricing</a>
      </div>

      <button className="nav-btn">Login</button>
    </nav>
  );
}

export default Navbar;