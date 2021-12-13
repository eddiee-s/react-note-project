import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./components/home/Home";
import Favorite from "./components/notes/Favorite";
import NoteDetail from "./components/notes/NoteDetail";
import EditForm from "./components/notes/EditForm";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/favorites' component={Favorite} />
        <Route exact path='/note/:id' component={NoteDetail} />
        <Route exact path='/editform/:id' component={EditForm} />
      </Switch>
    </Router>
  );
}

export default App;
