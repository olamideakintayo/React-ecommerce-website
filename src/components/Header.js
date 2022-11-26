import logo from '../images/logo.svg'
const Header = () => {
    return (
    <div>
         {/* Navbar */}
  <nav className="navbar flex items-center sticky top-0">
    <div className="navbar-center flex self-center justify-between m-auto">
        <span className="nav-icon">
          <button onClick="darkMode()">
            <i className="fa-solid fa-toggle-on"></i>
          </button>
        </span>
        <img src={logo} alt="Store logo" />
        <div className="cart-btn relative cursor-pointer">
            <span className="nav-icon">
                <i className="fas fa-cart-plus"></i>
            </span>
            <div className="cart-items absolute bg-brightRed">0</div>
        </div>
    </div>
  </nav>
  {/* End of Navbar */}
        </div>
    );
}
export default Header;