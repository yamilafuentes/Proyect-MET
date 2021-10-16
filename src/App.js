import { BrowserRouter as  Router, Switch, Route, Link } from "react-router-dom";
import Home from "./views/Home";
import Game from "./views/Game";
import './App.css';

function App() {
  return (
    <Router>             {/* este es mi componente router, lo interpreta con la sintaxis de router. Mi app va a tener rutas*/}
      <div className="App">
        QuizGame
      </div>
      <div style={{display: "flex", flexDirection: "column" }}>
        <Link to="/">Home</Link>
        <Link to="/game">Juego</Link>
      </div>

      <Switch>
        <Route exact path="/">
          <Home/>    {/* renderizame Home */}
        </Route>
        <Route path="/game">
          <Game />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
