// Write your code here
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const renderNotFoundDarkTheme = () => (
        <div className="notfound-bg-container notfound-bg-container-dark">
          <div className="notfound-content-container notfound-content-container-dark">
            <img
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              alt="not found"
              className="not-found-image"
            />
            <h1 className="not-found-title title-dark">Lost Your Way?</h1>
            <p className="not-found-content content-dark">
              We cannot seem to find the page you are looking for.
            </p>
          </div>
        </div>
      )

      const renderNotFoundLightTheme = () => (
        <div className="notfound-bg-container notfound-bg-container-light">
          <div className="notfound-content-container notfound-content-container-light">
            <img
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              alt="not found"
              className="not-found-image"
            />
            <h1 className="not-found-title title-light">Lost Your Way?</h1>
            <p className="not-found-content content-light">
              We cannot seem to find the page you are looking for.
            </p>
          </div>
        </div>
      )

      return (
        <>
          <Navbar />
          {isDarkTheme ? renderNotFoundDarkTheme() : renderNotFoundLightTheme()}
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
