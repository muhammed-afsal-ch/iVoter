import React, { useState, useEffect } from "react";
import "./Auth.css";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import useCookies from "react-cookie/cjs/useCookies";

function AdminLogin() {

  const [admin, setAdmin] = useState(null);
  const [cookies, setCookie] = useCookies(["admin"]);
  const navigate = useNavigate();

  useEffect(() => {
    if (cookies.admin) {
      navigate("/dashboard");
    } else {}

    return () => {};
  }, []);

  const LoginSchema = yup.object({
    username: yup.string().required("Please Enter Your Username"),
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
      .post("/api/2175/admin/login", data)
      .then((res) => {
        console.log(res.data);
        if (res.data.LoginStatus === "LOGIN_SUCCESS") {
          Swal.fire("Congrats", "Login Successfully", "success");
          setAdmin(res.data.admin);
          setCookie("admin", res.data.admin, { path: "/" });
          navigate("/dashboard");
        } else if (res.data.LoginStatus === "PASSWORD_WRONG") {
          Swal.fire("Password is not Match", "Login faild", "info");
        } else if (res.data.LoginStatus === "ADMIN_NOT_FOUND") {
          Swal.fire("Admin is not Found", "Poda Avdnn!", "info");
        } else {
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <div className="container loginbgadmin">
        <div className="div">
          <div className="iconlogin"></div>
          <h1>Admin Login</h1>
          <div className="controls">
            <h3>Username</h3>
            <input
              type="text"
              placeholder="username"
              {...register("username")}
            />
            <p className="err">
              {errors.username ? errors.username.message : ""}
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
              Login
            </button>
          </div>
          <p>
            Voter Login?{" "}
            <a href="" onClick={() => navigate("/")}>
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;
