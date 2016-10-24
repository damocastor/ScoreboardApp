import React from 'react'
import ReactDom from 'react-dom'

var PropTypes = React.PropTypes;

const Scoreboard = props => (
   <div className="scoreboard">
      <div className="teams">
         <div className="awayteam">
            <div className="awayteam__info">
               <div className="awayteam__logo"><img src="https://upload.wikimedia.org/wikipedia/en/thumb/e/e1/Kansas_City_Chiefs_logo.svg/313px-Kansas_City_Chiefs_logo.svg.png"></img> </div>
               <div className="awayteam__teamname"> Kansas City Chiefs </div>
            </div>
            <div className="awayteam__score"> {props.awayscore} </div>
         </div>
         <div className="hometeam">
            <div className="hometeam__score"> {props.homescore} </div>
            <div className="hometeam__info">
               <div className="hometeam__logo"> <img src="https://upload.wikimedia.org/wikipedia/en/thumb/9/9d/Oakland_Raiders.svg/190px-Oakland_Raiders.svg.png"></img> </div>
               <div className="hometeam__teamname"> Oakland Raiders </div>
            </div>
         </div>
         <div className="scoreboard__clock">
            <span> {props.clock} </span>
         </div>
         <div className="scoreboard__downtogo">
            <span> {props.downtogo} </span>
         </div>
      </div>
      <div className="lastplay__container">
         <span> </span>
      </div>
      <div>
         <div className="homeplays">
            <button id="homeTD" onClick={props.OnHomeScoreTD}> Home TD </button>
            <button id="homeXP" onClick={props.OnHomeScoreXP}> Home XP </button>
            <button id="homeFG" onClick={props.OnHomeScoreFG}> Home FG </button>
            <button id="homeSFTY" onClick={props.OnHomeScoreSFTY}> Home 2PT </button>
         </div>
         <br></br>
         <div className='awayplays'>
            <button id="awayTD" onClick={props.OnAwayScoreTD}> Away TD </button>
            <button id="awayXP" onClick={props.OnAwayScoreXP}> Away XP </button>
            <button id="awayFG" onClick={props.OnAwayScoreFG}> Away FG </button>
            <button id="awaySFTY" onClick={props.OnAwayScoreSFTY}> Away 2PT </button>
         </div>
         <br></br>
         <div className="lastplay__controller">
            <form onSubmit={props.onFormSubmit}>
               <input
                  type='text'
                  value={props.lastplay}
                  onChange={props.onLastPlayChange}
               />
               <input type="submit" value="Submit"/>
            </form>
         </div>

      </div>
   </div>
)


Scoreboard.propTypes = {
   clock: PropTypes.string.isRequired,
   downtogo: PropTypes.string.isRequired,
   lastplay: PropTypes.string.isRequired,
   homescore: PropTypes.number.isRequired,
   awayscore: PropTypes.number.isRequired,
}

export default Scoreboard
