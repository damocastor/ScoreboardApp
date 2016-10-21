import React from 'react';
import Scoreboard from '../components/Scoreboard'

import '../scss/style.scss';

var ScoreboardContainer = React.createClass ({

// STATE INFORMATION GOES HERE!!
   getInitialState : function () {
      return {
         lastplay: '',
         homescore: 0,
         awayscore: 0,
         clock: '1st Quarter - 9:06',
         downtogo: ''
      }
   },

   handleNameChange: function (e) {
      this.setState({
         lastplay: e.target.value
      });
   },

   handleSumbitChange: function(e) {
      e.preventDefault();
      this.props.onAddLastPlay(this.state.name);
      this.setState({
         lastplay: ''
      });
   },

   handleAddLastPlay: function(play) {
      console.log('Player added: ', play);
      this.state.lastplay.push({
         lastplay: play
      });
      this.setState(this.state);
   },


   homeScoreTd: function() {
      var homescore = this.state.homescore;
      this.setState({
         homescore: homescore +6
         }
      );
   },

   awayScoreTd: function () {
      var awayscore = this.state.awayscore;
      this.setState({
         awayscore: awayscore +6
      });
   },

   awayScoreFG: function () {
      var awayscore = this. state.awayscore;
      this.setState({
         awayscore: awayscore +3
      });
   },

      render: function () {
         return (
            <Scoreboard
               lastplay={this.state.lastplay}
               homescore={this.state.homescore}
               awayscore={this.state.awayscore}
               OnHomeScoreTD={this.homeScoreTd}
               OnAwayScoreTD={this.awayScoreTd}
               onNameChange={this.handleNameChange}
               onSubmitChange={this.handleSumbitChange}
               onAddLastPlay={this.handleAddLastPlay}
               clock={this.state.clock}
               downtogo={this.state.downtogo}
            />
         )
      }
});

export default ScoreboardContainer



//
// var PLAYERS = [
//   {
//     name: "Jim Hoskins",
//     score: 31,
//     id: 1,
//   },
//   {
//     name: "Andrew Chalkley",
//     score: 35,
//     id: 2,
//   },
//   {
//     name: "Alena Holligan",
//     score: 42,
//     id: 3,
//   },
// ];
// var nextId = 4;
//
//
//
// var AddPlayerForm = React.createClass({
//   propTypes: {
//     onAdd: React.PropTypes.func.isRequired,
//   },
//
//   getInitialState: function() {
//     return {
//       name: "",
//     };
//   },
//
//   onNameChange: function(e) {
//     this.setState({name: e.target.value});
//   },
//
//   onSubmit: function(e) {
//     e.preventDefault();
//
//     this.props.onAdd(this.state.name);
//     this.setState({name: ""});
//   },
//
//
//   render: function() {
//     return (
//       <div className="add-player-form">
//         <form onSubmit={this.onSubmit}>
//           <input type="text" value={this.state.name} onChange={this.onNameChange} />
//           <input type="submit" value="Add Player" />
//         </form>
//       </div>
//     );
//   }
// });
//
//
//
// function Header(props) {
//   return (
//     <div className="header">
//       <Stats players={props.players}/>
//       <h1>{props.title}</h1>
//     </div>
//   );
// }
//
// Header.propTypes = {
//   title: React.PropTypes.string.isRequired,
//   players: React.PropTypes.array.isRequired,
// };
//
//
//
//
//
//
//
//
//
//
//
// function Counter(props) {
//   return (
//     <div className="counter">
//       <button className="counter-action decrement" onClick={function() {props.onChange(-1);}} > - </button>
//       <div className="counter-score"> {props.score} </div>
//       <button className="counter-action increment" onClick={function() {props.onChange(1);}}> + </button>
//     </div>
//   );
// }
//
// Counter.propTypes = {
//   score: React.PropTypes.number.isRequired,
//   onChange: React.PropTypes.func.isRequired,
// }
//
//
//
//
//
//
//
//
//
//
//
//
// function Player(props) {
//   return (
//     <div className="player">
//       <div className="player-name">
//         <a className="remove-player" onClick={props.onRemove}>✖</a>
//         {props.name}
//       </div>
//       <div className="player-score">
//         <Counter score={props.score} onChange={props.onScoreChange} />
//       </div>
//     </div>
//   );
// }
//
// Player.propTypes = {
//   name: React.PropTypes.string.isRequired,
//   score: React.PropTypes.number.isRequired,
//   onScoreChange: React.PropTypes.func.isRequired,
//   onRemove: React.PropTypes.func.isRequired,
// };
//
//
//
//
//
//
//
//
//
//
//
//
// var Application = React.createClass({
//   propTypes: {
//     title: React.PropTypes.string,
//     initialPlayers: React.PropTypes.arrayOf(React.PropTypes.shape({
//       name: React.PropTypes.string.isRequired,
//       score: React.PropTypes.number.isRequired,
//       id: React.PropTypes.number.isRequired,
//     })).isRequired,
//   },
//
//   getDefaultProps: function() {
//     return {
//       title: "Scoreboard",
//     }
//   },
//
//   getInitialState: function() {
//     return {
//       players: this.props.initialPlayers,
//     };
//   },
//
//   onScoreChange: function(index, delta) {
//     this.state.players[index].score += delta;
//     this.setState(this.state);
//   },
//
//   onPlayerAdd: function(name) {
//     this.state.players.push({
//       name: name,
//       score: 0,
//       id: nextId,
//     });
//     this.setState(this.state);
//     nextId += 1;
//   },
//
//   onRemovePlayer: function(index) {
//     this.state.players.splice(index, 1);
//     this.setState(this.state);
//   },
//
//   render: function() {
//     return (
//       <div className="scoreboard">
//         <Header title={this.props.title} players={this.state.players} />
//
//         <div className="players">
//           {this.state.players.map(function(player, index) {
//             return (
//               <Player
//                 onScoreChange={function(delta) {this.onScoreChange(index ,delta)}.bind(this)}
//                 onRemove={function() {this.onRemovePlayer(index)}.bind(this)}
//                 name={player.name}
//                 score={player.score}
//                 key={player.id} />
//             );
//           }.bind(this))}
//         </div>
//         <AddPlayerForm onAdd={this.onPlayerAdd} />
//       </div>
//     );
//   }
// });
//
//
