import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Settings from './components/Settings';
import Visuallizations from './components/Visuallizations';
import Page4 from './components/Page4';
import Page5 from './components/Page5';

function App() {
  return (
    <div>
        <Router>
            <Sidebar />
            <Switch>
              <Route exact path="/"><Dashboard/></Route>
              <Route path="/Settings"><Settings/></Route>
              <Route path="/Visuallizations"><Visuallizations/></Route>
              <Route path="/Page4"><Page4/></Route>
              <Route path="/Page5"><Page5/></Route>
            </Switch>
        </Router>
    </div>
  );
}

export default App;