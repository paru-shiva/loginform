// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => {
  return (
    <>
      <div className="headerComponent">
        <div className="header-big">
          <img
            className="logo"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
          />
          <ul type='none' className="headerRight">
            <li to="/">Home</li>
            <li to="/products" className="menuItem">
              Products
            </li>
            <li to="/cart">Cart</li>
            <li>
              <button className="logButton">Logout</button>
            </li>
          </ul>
        </div>

        <div className="headerSmall">
          <div className="upHeader">
            <img
              className="logo"
              alt="website logo"
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            />
            <img
              className="logoutImage"
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
              alt="nav logout"
            />
          </div>
          <div className="downHeader">
            <img
              className="navIcon"
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
              alt="nav home"
            />
            <img
              className="navIcon"
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png "
              alt="nav products"
            />
            <img
              className="navIcon"
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png "
              alt="nav cart"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
