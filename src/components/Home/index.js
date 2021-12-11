// Write your code here
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const renderLightTheme = () => (
        <div className="home-bg-container home-bg-container-light">
          <div className="home-content-container home-content-container-light">
            <img
              src="https://assets.ccbp.in/frontend/react-js/home-light-img.png"
              alt="home"
              className="home-image"
            />
            <h1 className="home-title">Home</h1>
          </div>
        </div>
      )

      const renderDarkTheme = () => (
        <div className="home-bg-container home-bg-container-dark">
          <div className="home-content-container home-content-container-dark">
            <img
              src="https://assets.ccbp.in/frontend/react-js/home-dark-img.png"
              alt="home"
              className="home-image"
            />
            <h1 className="home-title">Home</h1>
          </div>
        </div>
      )

      return (
        <>
          <Navbar />
          {isDarkTheme ? renderDarkTheme() : renderLightTheme()}
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
