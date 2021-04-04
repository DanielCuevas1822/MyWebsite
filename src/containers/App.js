import { Route, Switch } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "../containers/App";
import Contact from "./Contact";
import Home from "./Home";
import MyProyects from "./MyProyects";
import SingleProyect from "./SingleProyect";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/proyects" component={MyProyects} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/proyects/:name" component={SingleProyect} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
