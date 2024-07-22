import {useState, useEffect} from 'react'
import {useHistory, Link} from 'react-router-dom'
import Loader from 'react-loader-spinner'
import './index.css'

const TeamCard = () => {
  const [teams, setTeams] = useState([])
  const [loading, setLoading] = useState(true)
  // eslint-disable-next-line
  const history = useHistory()

  useEffect(() => {
    async function getTeams() {
      const response = await fetch('https://apis.ccbp.in/ipl')
      if (response.ok) {
        const data = await response.json()
        setTeams(data.teams)
      }
      setLoading(false)
    }
    getTeams()
  }, [])

  //   const teamClickHandler = id => {
  //     history.push(`/team-matches/${id}`)
  //   }

  return (
    <div>
      {!loading && (
        <ul className="ul__teams">
          {teams &&
            teams.map(team => (
              <Link key={team.id} to={`/team-matches/${team.id}`}>
                <li key={team.id} className="li__teamCard">
                  <div className="logo__div">
                    <img
                      className="team__logo"
                      src={team.team_image_url}
                      alt={team.name}
                    />
                  </div>
                  <div>
                    <p>{team.name}</p>
                  </div>
                </li>
              </Link>
            ))}
        </ul>
      )}

      {loading && (
        <center data-testid="loader">
          <Loader type="Oval" color="#ffffff" height={50} width={50} />
        </center>
      )}
    </div>
  )
}

export default TeamCard
