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
         <span> {props.lastplay} </span>
      </div>
      <div>
         <button id="homeTD" onClick={props.OnHomeScoreTD}> Home TD </button>
         <button id="awayTD" onClick={props.OnAwayScoreTD}> Away TD </button>
         <div className="lastplay__controller">
            <form onSubmit={props.onSubmitChange} onSubmit={props.onAddLastPlay}>
               <input
                  className="lastplay__controller"
                  onChange={props.onNameChange}
                  placeholder=''
                  type='text'
                  value={props.lastplay}
               />
               <button type="submit"> Submit </button>
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
   onAddLastPlay: PropTypes.func.isRequired
}

export default Scoreboard
