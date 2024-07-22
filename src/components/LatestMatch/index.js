const LatestMatch = ({latestMatchDetails}) => {
  console.log('--', latestMatchDetails)
  return (
    <div>
      <h3 style={{margin: '1% 10%'}}>Latest Matches</h3>

      <div className="recent_match">
        <div>
          <p>{latestMatchDetails.competing_team}</p>
          <p>{latestMatchDetails.date}</p>
          <p>{latestMatchDetails.venue}</p>
          <p>{latestMatchDetails.result}</p>
        </div>

        <div className="team_logo_center">
          <img
            src={latestMatchDetails.competing_team_logo}
            alt={`latest match ${latestMatchDetails.competing_team}`}
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
