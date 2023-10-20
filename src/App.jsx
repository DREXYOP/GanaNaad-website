import {
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Newscard from './Components/News';
import ArticlePage from "./Components/ArticlePage";
import Page_404 from "./Components/Page_404";

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
        <Route path="/articles/:articleId">
          <ArticlePage />
        </Route>
        <Route path="/news">
          <Newscard />
        </Route>
        <Route path="/">
          <Newscard />
        </Route>
        
      </Switch>



    </>

  );
}

export default App;
