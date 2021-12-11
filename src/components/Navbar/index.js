// Write your code here
import {Link} from 'react-router-dom'

import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      const onClickToggleTheme = () => {
        toggleTheme()
      }

      const renderDarkTheme = () => (
        <div className="navbar-bg-container navbar-bg-container-dark">
          <nav className="nav-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png"
              alt="website logo"
              className="website-logo"
            />
            <ul className="nav-link-container">
              <Link to="/" className="nav-link-dark">
                <li>Home</li>
              </Link>
              <Link to="/about" className="nav-link-dark">
                <li>About</li>
              </Link>
            </ul>
            <button className="theme-btn" type="button" testid="theme">
              <img
                src="https://assets.ccbp.in/frontend/react-js/light-theme-img.png"
                className="theme-image"
                alt="theme"
                onClick={onClickToggleTheme}
              />
            </button>
          </nav>
        </div>
      )
      const renderLightTheme = () => (
        <div className="navbar-bg-container navbar-bg-container-light">
          <nav className="nav-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png"
              alt="website logo"
              className="website-logo"
            />
            <ul className="nav-link-container">
              <Link to="/" className="nav-link-light">
                <li>Home</li>
              </Link>

              <Link to="/about" className="nav-link-light">
                <li>About</li>
              </Link>
            </ul>
            <button
              className="theme-btn"
              type="button"
              testid="theme"
              onClick={onClickToggleTheme}
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/dark-theme-img.png"
                className="theme-image"
                alt="theme"
              />
            </button>
          </nav>
        </div>
      )

      return <>{isDarkTheme ? renderDarkTheme() : renderLightTheme()}</>
    }}
  </ThemeContext.Consumer>
)

export default Navbar
