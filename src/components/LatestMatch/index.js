const LatestMatch = ({latestMatchDetails}) => {
  console.log('--')
  return (
    <div>
      <h3 style={{margin: '1% 10%'}}>Latest Matches</h3>

      <div className="recent_match">
        <div>
          <h1>{latestMatchDetails.competing_team}</h1>
          <h3>{latestMatchDetails.date}</h3>
          <p>{latestMatchDetails.venue}</p>
          <p>{latestMatchDetails.venue}</p>
        </div>

        <div className="team_logo_center">
          <img
            src={latestMatchDetails.competing_team_logo}
            alt="Example response"
            className="opponenet__logo"
          />
        </div>
        <div className="div3">
          <p>First Innings</p>
          <p>{latestMatchDetails.first_innings}</p>
          <p>Second Innings</p>
          <p>{latestMatchDetails.second_innings}</p>
          <p>Man Of The Match</p>
          <p>{latestMatchDetails.man_of_the_match}</p>
          <p>Umpires</p>
          <p>{latestMatchDetails.umpires}</p>
        </div>
      </div>
    </div>
  )
}

export default LatestMatch
