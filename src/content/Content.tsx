import React from "react";
import { BrowserRouter as Router, NavLink, Redirect, Route, Switch } from "react-router-dom";
import About from "../about/About";
import Contact from "../contact/Contact";
import Home from "../home/Home";
import Resume from "../resume/Resume";
import Sidebar from "../sidebar/Sidebar";
import "./Content.scss";

const Content = () => {

    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 1024;
  
    React.useEffect(() => {
      const handleWindowResize = () => setWidth(window.innerWidth)
      window.addEventListener("resize", handleWindowResize);
      return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    return (
        <Router>
            <div className="navigation">
                <NavLink activeClassName="active"  className="navlink" exact to="/home">
                    <i className="fa fa-home"></i>
                </NavLink>
                <NavLink activeClassName="active" className="navlink" to="/about">
                    <i className="fa fa-user"></i>
                </NavLink>
                <NavLink activeClassName="active" className="navlink" to="/resume">
                    <i className="fa fa-book"></i>
                </NavLink>
                <NavLink activeClassName="active" className="navlink" to="/contact">
                    <i className="fa fa-phone"></i>
                </NavLink>
            </div>
            <div className="content">
                <Switch>
                    <Route exact path="/home">
                        {width > breakpoint ? <Home/>:<Sidebar/> }
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/resume">
                        <Resume />
                    </Route>
                    <Route path="/contact">
                        <Contact/>
                    </Route>
                    <Redirect to="/home" />
                </Switch>
            </div>
        </Router>
    )
}
export default Content;