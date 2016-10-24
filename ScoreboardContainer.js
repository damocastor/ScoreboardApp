import React from 'react';
import Scoreboard from '../components/Scoreboard'

import '../scss/style.scss';

var ScoreboardContainer = React.createClass ({

   getInitialState : function () {
      return {
         lastplay: '',
         homescore: 0,
         awayscore: 0,
         clock: '1st Quarter - 9:06',
         downtogo: ''
      }
   },

   handleFormSubmit: function(e) {

      //When hitting Enter or Submit stops the page from its default behavior of refreshing the page.
      e.preventDefault();

      //After hitting enter this should set the playstate to the value in the onAdd prop.
      this.props.onAdd(this.setState.lastplay);

      //Resets lastplay state to empty
      this.setState ({lastplay: ''})
   },

   handleLastPlayChange: function(e) {
      this.setState({
         lastplay: e.target.value
      })
   },


   handleAddLastPlay: function(play) {
   // This will push the input text to the assigned div.
   console.log('last play: ', play);
   },

   homeScoreTD: function() {
      var homescore = this.state.homescore;
      this.setState({
         homescore: homescore +6
         }
      );
   },

   awayScoreTD: function () {
      var awayscore = this.state.awayscore;
      this.setState({
         awayscore: awayscore +6
      });
   },

   homeScoreFG: function() {
      var homescore = this.state.homescore;
      this.setState({
         homescore: homescore +3
         }
      );
   },

   awayScoreFG: function (play) {
      var awayscore = this.state.awayscore;
      var awayFG = document.getElementById("awayFG");
      var awayTD = document.getElementById('awayTD');
      var awayXP = document.getElementById('awayXP');
      var awaySFTY = document.getElementById('awaySFTY')

      switch (input) {
         case awayFG:
            console.log ("FG success");
            break;
         default:
            console.log ("No points scored yet!")
      }

      // if (play = awayFG) {
      //    console.log('hello');
      //    this.setState ({
      //       awayscore: awayscore +3
      //    })
      // } else {
      //    console.log('no-luck!');
      // };
      // this.setState({
      //    awayscore: awayscore +3
      // });
   },

   homeScoreXP: function() {
      var homescore = this.state.homescore;
      this.setState({
         homescore: homescore +1
         }
      );
   },

   awayScoreXP: function () {
      var awayscore = this.state.awayscore;
      this.setState({
         awayscore: awayscore +1
      });
   },

   homeScoreSFTY: function() {
      var homescore = this.state.homescore;
      this.setState({
         homescore: homescore +2
         }
      );
   },

   awayScoreSFTY: function () {
      var awayscore = this.state.awayscore;
      this.setState({
         awayscore: awayscore +2
      });
   },

      render: function () {
         return (
            <Scoreboard
               lastplay={this.state.lastplay}
               homescore={this.state.homescore}
               awayscore={this.state.awayscore}

               clock={this.state.clock}
               downtogo={this.state.downtogo}

               OnHomeScoreTD={this.homeScoreTD}
               OnAwayScoreTD={this.awayScoreTD}
               OnHomeScoreFG={this.homeScoreFG}
               OnAwayScoreFG={this.awayScoreFG}
               OnHomeScoreXP={this.homeScoreXP}
               OnAwayScoreXP={this.awayScoreXP}
               OnHomeScoreSFTY={this.homeScoreSFTY}
               OnAwayScoreSFTY={this.awayScoreSFTY}

               onFormSubmit={this.handleFormSubmit}
               onAdd={this.handleAddLastPlay}
            />
         )
      }
});

export default ScoreboardContainer
