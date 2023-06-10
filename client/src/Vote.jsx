import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import useCookies from "react-cookie/cjs/useCookies";
import "./Vote.css";
import { Outlet, Route, Routes, useNavigate } from "react-router-dom";
import Presidential from "./VoteParts/Presidential";
import Secretarial from "./VoteParts/Secretarial";
import VicePresidential from "./VoteParts/VicePresidential";
import Treasurer from "./VoteParts/Treasurer";

function Vote() {
  const [cookies, setCookies] = useCookies(["user"]);
  const [votestatus, setVotestatus] = useCookies(["votestatus"]);
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  // const [voteStatus, setVoteStatus] = useState({});
  

  useEffect(() => {

    if (cookies.user === undefined) {
      navigate("/");
    } else {
      setUser(cookies.user[0]);
      // if (votestatus.votestatus === !undefined) {
      //   setVotestatus(votestatus.votestatus);
      //   console.log(votestatus);
      // }
      //setVoteStatus(cookies.votestatus);

      //console.log(voteStatus[0],"vote for");
      //if (voteStatus) {
        
      //}
    }
    

    return () => {};
  }, []);

  
  return (
    <div>
      {/* ______________________________________________  */}

      <div
        className="nav"
        style={{
          backgroundColor: "#fcbf49",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "30px",
          height: "100px",
          alignItems: "center",
        }}
      >
        <div className="title">
          <h1>iVoter | Uswa Election 2023</h1>
        </div>
        <div className="data" style={{ display: "flex", alignItems: "center" }}>
          <div className="profile">
            <img
              src={`/${user.adno}.jpg`}
              alt="profile"
              style={{ height: "80px", width: "80px", borderRadius: "50%", objectFit:"cover" }}
            />
          </div>
          <div className="content" style={{ marginLeft: "20px" }}>
            <h2>{user.name}</h2>
            <h3>Class: {user.class}</h3>
          </div>
        </div>
      </div>

      {/* ______________________________________________  */}
        <Outlet/>
        <Routes>
          <Route path="/Presidential" Component={Presidential} />
          <Route path="/Secretarial" Component={Secretarial} />
          <Route path="/VicePresidential" Component={VicePresidential} />
          <Route path="/Treasurer" Component={Treasurer} />
        </Routes>
      
    </div>
  );
}

export default Vote;
