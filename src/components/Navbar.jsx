import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className="nav">
        <div className="titlebar">
          <h1>Store</h1>
        </div>
        <ul className="navlinks">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
