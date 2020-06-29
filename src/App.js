import React from 'react';
import './styles/styles.scss'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import QuizInstructions from './components/quiz/QuizInstructions';
import Play from './components/quiz/Play';
import Resultaat from './components/quiz/QuizSummary';



function App() {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/play/instructions" exact component={QuizInstructions} />
      <Route path="/play/quiz" exact component={Play} />
      <Route path="/play/Resultaat" exact component={Resultaat} />
    </Router>
  );
}


export default App;