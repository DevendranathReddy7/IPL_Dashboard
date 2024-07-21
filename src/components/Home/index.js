import './index.css'
import TeamCard from '../TeamCard'

const Home = () => {
  console.log('')
  return (
    <div>
      <div className="logo_container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
          alt="ipl logo"
          className="logo"
        />
        <h1 className="heading">IPL Dashboard</h1>
      </div>

      <div className="teams__container">
        <TeamCard />
      </div>
    </div>
  )
}

export default Home
