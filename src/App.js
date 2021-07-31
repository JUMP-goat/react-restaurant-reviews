import { Switch, Route } from "react-router-dom";
import { LandingPage } from "./LandingPage/LandingPage";
import { Search } from "./Search/Search";
import { Footer } from "./Footer/Footer";

function App() {
  return (
    <div>
      <Switch>
        <Route path='/search' component={Search}/>
        <Route path='/' component={LandingPage}/>
      </Switch>
    <Footer className="footer"/>
    </div>
  );
}

export default App;
