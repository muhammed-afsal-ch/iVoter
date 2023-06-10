import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function AllVoters() {
  const [allvoters, setAllvoters] = useState([]);

  useEffect(() => {
    axios
      .get("/api/2175/vote/getallvoters")
      .then((res) => {
        console.log(res.data);
        setAllvoters(res.data.allVoters);
      })
      .catch((err) => console.error(err));

    return () => {};
  }, []);
  return (
    <div>
      <h1
        style={{
          textAlign: "center",
          fontSize: "50px",
          marginTop: "30px",
        }}
      >
        All Voters
      </h1>
      <div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            marginLeft:"30px",
            flexWrap:"wrap",
            background:"white"
           
          }}
        >
          {allvoters.map((val, key) => {
            const { voter_id, adno, name, password, union } = val;
            
            return (
              <div
                key={key}
                style={{
                  height: "320px",
                  width: "100%",
                  backgroundColor: "#003566",
                  margin: "10px",
                  display: "flex",
                  borderRadius: "6px",
                  justifyContent: "center",
                  flexDirection: "column",
                  padding: "30px",
                  color: "white",
                  boxShadow: "2px 2px 10px gray",
                  width:"250px"
                }}
              >
                <div className="profile">
                  <img
                    src={`/${adno}.jpg`}
                    alt="profile"
                    style={{
                      height: "130px",
                      width: "130px",
                      borderRadius: "50%",
                      objectFit: "cover",
                    }}
                  />
                </div>

                <p> Voter Id:</p>
                <h2 style={{ color: "#ef233c" }}>{voter_id}</h2>
                <p>Name: {name}</p>
                <p>Password: {password}</p>
                <p>Union: {union}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default AllVoters;
