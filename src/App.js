import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Product from "./components/Product/Product";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Admin from "./components/admin/Admin";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/products" exact={true} component={Product} />
        <Route path="/contact" exact={true} component={Contact} />
        <Route path="/admin" exact={true} component={Admin} />
        <Route path="/" exact={true} component={Home} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
