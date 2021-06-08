import React, { useEffect } from "react";
import Content from "./content/Content";
import Sidebar from "./sidebar/Sidebar";
import "./App.scss";

const App = () => {

    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 1024;
  
    React.useEffect(() => {
      const handleWindowResize = () => setWidth(window.innerWidth)
      window.addEventListener("resize", handleWindowResize);
      return () => window.removeEventListener("resize", handleWindowResize);
    }, []);
  
    return(
        <div className="app">
            {width > breakpoint ? <Sidebar/>: ""}
            <Content/>
        </div>
    )
}
export default App;