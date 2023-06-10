import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./Auth/Login";
import Vote from "./Vote";
import AdminLogin from "./Admin/Auth/AdminLogin";
import Dashhome from "./Admin/Dashboard/Dashhome";
import Dashboard from "./Admin/Dashboard/Dashboard";
import { CookiesProvider } from "react-cookie";
import { createContext } from "react";
import { useState } from "react";
import { useEffect } from "react";

export const WindowContext = createContext({});


function App() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const updateDimensions = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };
  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return (
    <div className="App">
      <CookiesProvider>
        <WindowContext.Provider value={{ width, height }}>
          <BrowserRouter>
            <Routes>
              <Route path="/" Component={Login} />
              <Route path="/vote"  >
                <Route path="*" Component={Vote} />
              </Route>
              <Route path="/admin" Component={AdminLogin} />
              <Route path="/dashboard/*" Component={Dashhome}>
                <Route path="*" Component={Dashboard} />
              </Route>
            </Routes>
          </BrowserRouter>
        </WindowContext.Provider>
      </CookiesProvider>
    </div>
  );
}

export default App;
