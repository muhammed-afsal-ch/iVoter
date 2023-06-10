import React from "react";
import { useContext } from "react";
import { WindowContext } from "../../App";

function Profile({admin}) {
  const { width, height } = useContext(WindowContext);
    

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: width > 600 ? "flex-end" : "center",
      }}
    >
      <div
        className="profile"
        style={{
          height: width>600 ? "15vh": "20vh",
          width: width > 600 ? "20vw" : "100vw",
          backgroundColor: "gray",
          padding: "10px",
          borderRadius: "12px 0 0 0 ",
          display:"flex",
          flexDirection: width>600 ? "row" : "column",
          alignItems:"center",
          justifyContent:"space-around"
        }}
      >
        <div style={{paddingTop: width >600 ? "" : "20px",  width:"100px", height:"100px" }}>
          <img src={`http://localhost:3031/${admin ? admin.username: "profile"}.jpg`} alt="" width="100px" height="100px"  style={{borderRadius:"50%",  objectFit:"cover"}}/>
        </div>
        <div>
          <h1 style={{color:"white"}}>Name : {admin ? admin.username : ""}</h1>
          <h3 style={{color:"white"}}>Email : {admin ? admin.email : ""}</h3>
        </div>
      </div>
    </div>
  );
}

export default Profile;
