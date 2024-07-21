const MatchCard = ({recentMatches}) => {
  console.log('---')
  return (
    <ul className="ul__container">
      {recentMatches.map(match => (
        <li key={match.id} className="li__match">
          <div>
            <img
              src={match.competing_team_logo}
              alt={`latest match ${match.competing_team}`}
              className="result__team"
            />
          </div>
          <div>
            <p>{match.competing_team}</p>
          </div>
          <div>
            <p>{match.result}</p>
          </div>

          <div>
            <p className={match.match_status === 'Lost' ? 'Lost' : 'Won'}>
              {match.match_status}
            </p>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default MatchCard
