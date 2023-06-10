import React, { useState } from "react";
import "./Auth.css";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import useCookies from "react-cookie/cjs/useCookies";

function Login() {
  const [user, setUser] = useState(null);
  const [votestatus, setVotestatus] = useState(null);
  const [cookies, setCookie] = useCookies(["user"]);

  const navigate = useNavigate();

  const LoginSchema = yup.object({
    voter_id: yup
      .string()
      .required("Please Enter Your Voter id")
      .min(4, "Please Enter Your Valid id"),
    password: yup.string().required("Enter Password"),
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(LoginSchema),
  });

  const FormSubmit = (data) => {
    console.log(data);

    axios
      .post("api/users", data)
      .then((res) => {
        console.log(res.data);
        if (res.data.LoginStatus === "LOGIN_SUCCESS") {
          setUser(res.data.user);
          setVotestatus(res.data.votestatus[0]);
          setCookie("user", res.data.user, { path: "/" });
          setCookie("votestatus", res.data.votestatus, { path: "/" });
          setCookie("ReToken", res.data.refreshToken, { path: "/" });

          Swal.fire("Congrats", " Login Successfully", "success").then(
            (res) => {
              console.log(res);
              if (res.isConfirmed === true) {
                navigate("/vote/Presidential");
                // if (votestatus.presidential === "") {
                //   console.log("Is empty Presidential");
                //   navigate("/vote/Presidential");
                // } else {
                //   console.log("Is not empty Presidential");
                //   if (votestatus.secretarial === "") {
                //     navigate("/vote/Secretarial");
                //   } else {
                //     if (votestatus.vice_presidential === "") {
                //       navigate("/vote/VicePresidential");
                //     } else {
                //       if (votestatus.treasurer === "") {
                //         navigate("/vote/Treasurer");
                //       } else {
                //         // window.alert("Your Are Already voted");
                //         Swal.fire(
                //           "You Can't vote",
                //           " Your have Already voted!",
                //           "error"
                //         );
                //       }
                //     }
                //   }
                // }
              } else {
                // if (votestatus.presidential === "") {
                //   console.log("Is empty Presidential");
                navigate("/vote/Presidential");
                // } else {
                //   console.log("Is not empty Presidential");
                //   if (votestatus.secretarial === "") {
                //     navigate("/vote/Secretarial");
                //   } else {
                //     if (votestatus.vice_presidential === "") {
                //       navigate("/vote/VicePresidential");
                //     } else {
                //       if (votestatus.treasurer === "") {
                //         navigate("/vote/Treasurer");
                //       } else {
                //         // window.alert("Your Are Already voted");
                //         Swal.fire(
                //           "You Can't vote",
                //           " Your have Already voted!",
                //           "error"
                //         );
                //       }
                //     }
                //   }
                // }
              }
            }
          );

          /////////////////////////////

          // console.log(votestatus);
          // if (votestatus.presidential === "") {
          //   console.log("Is empty Presidential");
          //   navigate("/vote/Presidential");
          // } else {
          //   console.log("Is not empty Presidential");
          //   if (votestatus.secretarial === "") {
          //     navigate("/vote/Secretarial");
          //   } else {
          //     if (votestatus.vice_presidential === "") {
          //       navigate("/vote/VicePresidential");
          //     } else {
          //       if (votestatus.treasurer === "") {
          //         navigate("/vote/Treasurer");
          //       } else {
          //         // window.alert("Your Are Already voted");
          //         Swal.fire(
          //           "You Can't vote",
          //           " Your have Already voted!",
          //           "error"
          //         );
          //       }
          //     }
          //   }
          // }

          /////////////////////////////

          //navigate("/vote/Presidential");
        } else if (res.data.LoginStatus === "PASSWORD_WRONG") {
          Swal.fire("Password is not Match", "Login faild", "info");
        } else if (res.data.LoginStatus === "USER_NOT_FOUND") {
          Swal.fire("Voter is not Found", "you cann't to vote!", "info");
        } else {
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <div className="container loginbg">
        <div className="div">
          <div className="iconlogin"></div>
          <h1>Login to iVoter</h1>
          <div className="controls">
            <h3>Voter Id</h3>
            <input
              type="number"
              placeholder="Voter Id"
              {...register("voter_id")}
            />
            <p className="err">
              {errors.voter_id ? errors.voter_id.message : ""}
            </p>
          </div>
          <div className="controls">
            <h3>Password</h3>
            <input
              type="password"
              placeholder="Password"
              {...register("password")}
            />
            <p className="err">
              {errors.password ? errors.password.message : ""}
            </p>
          </div>
          <div className="controls">
            <button
              onClick={handleSubmit(FormSubmit)}
              onSubmit={(e) => e.preventDefault()}
            >
              Submit
            </button>
          </div>
          <p>
            Admin Login?
            <a href="" onClick={() => navigate("/admin")}>
              Login
            </a>
          </p>
          <div>
            <p
              style={{
                fontSize: "12px",
                fontWeight: "bold",
                display: "flex",
                boxShadow: "2px 2px 8px gray",
                borderRadius: "30px",
                padding: "8px",
                marginTop: "5px",
                cursor:"pointer",
                backgroundColor:"#FDFDFD",
                border:"0.2px solid gray"
              }}
              onClick={() => window.open("https://www.instagram.com/afsal_web_designs/")}
            >
              Developed by :
              <a
                href="https://www.instagram.com/afsal_web_designs/"
                style={{  fontSize: "12px" ,display: "flex"}}
              >
                <div className="lgg"></div> Afsal_Web_designs
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
