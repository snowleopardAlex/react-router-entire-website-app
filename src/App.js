// useHistory, useRouteMatch, useParams hooks
// I didn't use here useLocation because it is complicated hook and it is rarely used
import React from "react"
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Profile from "./pages/profile/Profile";
import ServicesList from "./pages/services/ServicesList";
import ServicesDetail from "./pages/services/ServicesDetail";

import { Switch, Route } from "react-router-dom";


function App() {
  return (
    <div>

      <Header />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route exact path="/services">
          <ServicesList />
        </Route>
        <Route path="/services/:serviceId">
          <ServicesDetail />
        </Route>
      </Switch>

      <Footer />
    </div>
  )
}

export default App;



