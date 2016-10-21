import React from 'react';
import ReactDOM from 'react-dom';
import Scoreboard from './components/Scoreboard'
import ScoreboardContainer from './containers/ScoreboardContainer'
// CSS
import './scss/style.scss';


ReactDOM.render(
   <ScoreboardContainer
   />,
   document.getElementById('container')
);
