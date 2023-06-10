import React from "react";
import { useEffect, useState } from "react";
import useCookies from "react-cookie/cjs/useCookies";
import "../Vote.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2/dist/sweetalert2.js";

function Treasurer() {
  const [cookies, setCookies, removeCookie] = useCookies(["user"]);
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  const position = "Treasurer";
  const [TreasurerCandidates, setTreasurerCandidates] = useState([]);
  const [voteFor, setVoteFor] = useState("");
  const [clicked, setClicked] = useState(false);
  const [voteState, setVoteState] = useState("");

  useEffect(() => {
    if (cookies.user === undefined) {
      navigate("/");
    } else {
      setUser(cookies.user[0]);
      axios
        .post("/api/users/getVotesStates", {
          voter_id: cookies.user[0].voter_id,
        })
        .then((res) => {
          console.log(user.voter_id);
          console.log(res.data.votestatus[0]);
          setVoteState(res.data.votestatus[0]);
          if (res.data.votestatus[0].treasurer === "") {
            console.log("Is empty treasurer");
            //navigate("/vote/Presidential");
          } else {
            navigate("/");
            Swal.fire("You Can't vote", " Your have Already voted!", "error");
          }
        })
        .catch((err) => console.error(err));
    }

    return () => {};
  }, []);

  useEffect(() => {
    axios
      .post("/api/2175/vote/getAllTreasurer", { position })
      .then((res) => {
        console.log(res.data.TreasurerCandidates);
        setTreasurerCandidates(res.data.TreasurerCandidates);
      })
      .catch((err) => console.error(err));

    return () => {};
  }, []);

  //////


  
  function play() {
    var audio = document.getElementById("audio");
    audio.play();
  }

  document
    .querySelectorAll("input[type=checkbox]")
    .forEach((element) => element.addEventListener("click", disableOther));

  function areYouSureVote(event) {
    const confirmBox = window.confirm("Are you sure?");
    if (confirmBox === true) {
      event.target.disabled = true;
      document
        .querySelectorAll("input[type=checkbox]")
        .forEach((element) => (element.disabled = true));
      console.log("user voted to: ", event.target.value);
      setVoteFor(event.target.value);
      setClicked(true);
      play();
    } else {
      event.target.checked = false;
      event.target.disabled = false;
      document
        .querySelectorAll("input[type=checkbox]")
        .forEach((element) => (element.disabled = false));
    }
  }

  function disableOther(event) {
    //"event" is current event(click)
    //"event.target" is our clicked element
    if (event.target.checked) {
      // if current input is checked -> disable ALL inputs
      document
        .querySelectorAll("input[type=checkbox]")
        .forEach((element) => (element.disabled = true));
      // enabling our current input

      event.target.disabled = false;
    } else {
      // if current input is NOT checked -> enabling ALL inputs
      document
        .querySelectorAll("input[type=checkbox]")
        .forEach((element) => (element.disabled = false));
    }
  }
  function handleVote(event) {
    const { voter_id, union } = user;
    const vote = {
      voter_id,
      union,
      position: position,
      votefor: voteFor,
    };
    console.log(vote);
    if (clicked === true) {
      axios
        .post("/api/2175/vote/addTreasurer", vote)
        .then((res) => {
          if (res.data.ADD_Treasurer_STATUS === "ADDED") {
            Swal.fire(
              "Finish!",
              "Your have Successfully Completed <h1>USWA ELECTION'23!</h1>",
              "success"
            ).then((res) => {
              console.log(res);
              if (res.isConfirmed === true) {
                navigate("/");
              } else {
                navigate("/");
              }
            });
            // navigate("/")
            // Swal({
            //   title: "Are you sure?",
            //   text: "Once deleted, you will not be able to recover this imaginary file!",
            //   icon: "warning",
            //   buttons: true,
            //   dangerMode: true,
            // })
          } else {
          }
        })
        .catch((err) => console.error(err));
    } else {
      window.alert("Please Select At least on Candidate!");
    }
  }
  return (
    <div>
      <div
        className="vote"
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "100px",
        }}
      >
        <table style={{ background: "white" }}>
          <h1 style={{ textAlign: "center" }}>Treasurer</h1>
          <tr>
            <th>
              <h2>Candidates</h2>
            </th>
            <th>Vote</th>
          </tr>

          {TreasurerCandidates.map((item, key) => {
            console.log(item);
            return (
              <tr key={key}>
                <div>
                  <div
                    style={{
                      display: "flex",
                      width: "420px",
                      alignItems: "center",
                      padding: "10px",
                      border: "0.1px solid gray",
                    }}
                  >
                    <div className="symbol">
                      <img
                        src={`/${item.candidate_id}.jpg`}
                        alt=""
                        style={{
                          height: "120px",
                          width: "100px",
                          objectFit: "cover",
                          borderRadius: "5px",
                        }}
                      />
                    </div>
                    <div className="content" style={{ marginLeft: "30px" }}>
                      <h1>{item.fullname}</h1>
                      <p>{item.place}</p>
                    </div>
                  </div>
                </div>
                <td style={{ border: "0.1px solid gray" }}>
                  <label class="switch" style={{ margin: "10px" }} id="vote">
                    <input
                      type="checkbox"
                      name="vote"
                      onClick={(event) => areYouSureVote(event)}
                      value={item.candidate_id}
                    />
                    <span class="slider round"></span>
                  </label>
                </td>
              </tr>
            );
          })}
        </table>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "30px",
        }}
      >
        <input
          type="button"
          value="Finish"
          onClick={() => handleVote()}
          style={{
            padding: "10px",
            width: "120px",
            backgroundColor: "#29bf12",
            cursor: "pointer",
            color: "white",
          }}
        />
      </div>
      <audio id="audio" src="/beep.mp3"></audio>
    </div>
  );
}

export default Treasurer;
