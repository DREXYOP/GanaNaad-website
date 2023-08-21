import {
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Newscard from './Components/News';

function App() {
  return (
    <>

     
      <Switch>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/">
          <Newscard />
        </Route>
      </Switch>



    </>

  );
}

export default App;
