import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function AllCandidate() {
  const [AllCandidates, setAllCandidates] = useState([]);

  useEffect(() => {
    axios
      .get("/api/2175/vote/getAllCandidates")
      .then((res) => {
        console.log(res.data);
        setAllCandidates(res.data.allCandidates);
        console.log(AllCandidates,"iijuoisdf");
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
        All Candidates
      </h1>
      <div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            marginLeft:"100px",
            flexWrap:"wrap",

           
          }}
        >
          {AllCandidates.map((val, key) => {
            const { candidate_id, fullname , place, position } = val;

            return (
              <div
                key={key}
                style={{
                  height: "320px",
                  width: "100%",
                  backgroundColor: "#08BA64",
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
                    src={`/${candidate_id}.jpg`}
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
                <h2 style={{ color: "#ef233c" }}>{candidate_id}</h2>
                <p>Name: {fullname}</p>
                <p>Place: {place}</p>
                <p>Position: {position}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default AllCandidate;
