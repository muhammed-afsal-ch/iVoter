import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import useCookies from "react-cookie/cjs/useCookies";
import { Route, Routes, useNavigate } from "react-router-dom";
import { WindowContext } from "../../App";
import { useContext } from "react";
import SideBar from "./SideBar";
import Functions from "./Functions";
import axios from "axios";
import AllVoters from "./Items/AllVoters";
import AllCandidate from "./Items/AllCandidate";

function Dashboard() {
  const [cookies, setCookies, removeCookie] = useCookies(["admin"]);
  const navigate = useNavigate();
  const [admin, setAdmin] = useState({});
  const size = useContext(WindowContext);
  const [allvoters, setAllvoters] = useState([]);

  useEffect(() => {
    if (cookies.admin === undefined) {
      navigate("/admin");
    } else {
      setAdmin(cookies.admin[0]);
    }

    return () => {};
  }, []); 

  useEffect(() => {
    axios
      .get("/api/2175/vote/getallvoters")
      .then((res) => {
        console.log(res.data);
        setAllvoters(res.data.allVoters);
        console.log(allvoters.length);
      })
      .catch((err) => console.error(err));

    return () => {};
  }, []);

  function afsal(params) {
    console.log("poda");
    document.getElementById("imgadmin").src =
      "https://static.vecteezy.com/system/resources/previews/000/575/503/original/vector-logout-sign-icon.jpg";
    document.getElementById("imgadmin").style.cursor = "pointer";
  }
  function old(params) {
    console.log("vannu");
    document.getElementById("imgadmin").src =
      "https://i.ibb.co/YW5CV7z/admin.jpg";
  }
  function handleRemoveCookie() {
    removeCookie("admin");
    navigate("/admin");
  }

  return (
    <div>
      {size.width < 600 ? (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "center",
            padding: "10px",
          }}
        ></div>
      ) : (
        <div></div>
      )}
      <div
        className="top"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          padding: "10px",
         
        }}
      >
        <div
          className="logo"
          onClick={() => navigate("/dashboard")}
          style={{
            height: "80px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              height: "90px",
              width: "90px",
              borderRadius: "50%",
              backgroundColor: "white",
              boxShadow: "2px 2px 5px gray",
              border: "1px solid gray",
              marginTop: "10px",
            }}
          >
            <img
              src="https://i.ibb.co/gSWT6Z3/logo.png"
              style={{ height: "90px", width: "90px" }}
              alt="logo"
            />
          </div>
          <div
            style={{
              marginTop: "30px",
              marginLeft: "20px",
              textShadow: "1px 1px 1px gray",
            }}
          >
            <h1 style={{ color: "white", fontFamily: "cursive" }}>
              USWA ELECTION 2023-24
            </h1>
          </div>
        </div>
        <div className="right">
          <div
            style={{
              height: "90px",
              width: "90px",
              borderRadius: "50%",
              backgroundColor: "white",
              boxShadow: "2px 2px 2px black",
              border: "1px solid gray",
            }}
          >
            <img
              onMouseOver={() => afsal()}
              onMouseOut={() => old()}
              onClick={handleRemoveCookie}
              id="imgadmin"
              src="https://i.ibb.co/YW5CV7z/admin.jpg"
              style={{ height: "90px", width: "90px", borderRadius: "50%" }}
              alt="admin"
            />
          </div>
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <SideBar />
        <div
          style={{ width: "90vw", backgroundColor: "#e5e5e5", height: "90vh" }}
        >
          <Routes>
            {/* <Route path="/" Component={Home} /> */}
            <Route path="/Functions" Component={Functions} />
            <Route path="/Voters" Component={AllVoters}/>
            <Route path="/Candidates" Component={AllCandidate} />
          </Routes>

          
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
