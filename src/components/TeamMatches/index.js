import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import Loader from 'react-loader-spinner'

import './index.css'
import LatestMatch from '../LatestMatch/index'
import MatchCard from '../MatchCard/index'

const TeamMatches = () => {
  const [latestMatchDetails, setLatestMatchDetails] = useState({})
  const [recentMatches, setRecentMatches] = useState([])
  const [teamBanner, setTeamBanner] = useState('')
  const [loading, setLoading] = useState(true)
  const [bgColor, setBgColor] = useState('')

  const {id} = useParams()

  useEffect(() => {
    switch (id) {
      case 'CSK':
        setBgColor('#f7db00')
        break
      case 'RCB':
        setBgColor('#d91c1f')
        break
      case 'KXP':
        setBgColor('#a4261d')
        break
      case 'SH':
        setBgColor('#f26d22')
        break
      case 'MI':
        setBgColor('#13418b')
        break
      case 'DC':
        setBgColor('#5755a7')
        break
      case 'KKR':
        setBgColor('#4f5db0')
        break
      case 'RR':
        setBgColor('#da237b')
        break
      default:
    }
    async function getMatches() {
      const response = await fetch(`https://apis.ccbp.in/ipl/${id}`, {
        method: 'GET',
      })

      if (response.ok) {
        const res = await response.json()

        setLatestMatchDetails(res.latest_match_details)
        setRecentMatches(res.recent_matches)
        setTeamBanner(res.team_banner_url)
      }
      setLoading(false)
    }
    getMatches()
  }, [id])

  return (
    <div style={{background: `linear-gradient(to bottom, ${bgColor}, black)`}}>
      {!loading && (
        <div className="team__banner">
          <img className="team__image" src={teamBanner} alt="team banner" />
        </div>
      )}

      {!loading && <LatestMatch latestMatchDetails={latestMatchDetails} />}

      {!loading && <MatchCard recentMatches={recentMatches} />}
      {loading && (
        <center data-testid="loader">
          <Loader type="Oval" color="#ffffff" height={50} width={50} />
        </center>
      )}
    </div>
  )
}

export default TeamMatches
