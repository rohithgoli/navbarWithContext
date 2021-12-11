// Write your code here
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const renderAboutLightTheme = () => (
        <div className="about-bg-container about-bg-container-light">
          <div className="about-content-container about-content-container-light">
            <img
              src="https://assets.ccbp.in/frontend/react-js/about-light-img.png"
              alt="about"
              className="about-image"
            />
            <h1 className="about-title">About</h1>
          </div>
        </div>
      )

      const renderAboutDarkTheme = () => (
        <div className="about-bg-container about-bg-container-dark">
          <div className="about-content-container about-content-container-dark">
            <img
              src="https://assets.ccbp.in/frontend/react-js/about-dark-img.png"
              alt="about"
              className="about-image"
            />
            <h1 className="about-title">About</h1>
          </div>
        </div>
      )

      return (
        <>
          <Navbar />
          {isDarkTheme ? renderAboutDarkTheme() : renderAboutLightTheme()}
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
