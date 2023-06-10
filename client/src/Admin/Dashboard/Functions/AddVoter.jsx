import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

function AddVoter() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onStudentSubmit = (data) => {
    console.log(data);

    const formdata = new FormData();
    formdata.append("profile", data.photo[0], data.adno);

    axios
      .post("/api/2175/admin/addvoter", data)
      .then((res) => {
        console.log(res.data);
        if (res.data.VoterAddStatus === "VOTER_ADDED_SUCCESSFULLY") {
          axios.post("/api/2175/profile", formdata).then((res) => {
            if (res.data.VoterAddStatus === "ADDED_PHOTO_SUCCESSFULLY") {
              Swal.fire("Congrats", "Voter Added Successfully", "success");
            } else {
              Swal.fire("Faild", "Something went wrong!", "info");
            }
          });
        } else if (res.data.VoterAddStatus === "VOTER_ALREADY_REGISTERD") {
          Swal.fire("Faild", "Voter Already Registered!", "warning");
        } else {
          Swal.fire("Faild", "Something went wrong!", "info");
        }
      })
      .catch((err) => console.error(err));
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        maxWidth: "20vw",
        alignItems: "center",
        justifyContent: "center",
        margin: "10em",
        backgroundColor: "#FCA311",
        padding: "25px",
        borderRadius: "6px",
      }}
    >
      <h1>Add Voter</h1>
      <form id="addStudent">
        <input
          type="number"
          placeholder="Voter_id"
          {...register("voter_id", { required: "This is Required" })}
          style={{ minWidth: "100%", height: "50px" }}
        />
        {errors.voter_id ? <label>{errors.voter_id.message}</label> : ""}
        <input
          type="number"
          placeholder="adno"
          {...register("adno", { required: "This is Required" })}
          style={{ minWidth: "100%", height: "50px" }}
        />
        {errors.adno ? <label>{errors.adno.message}</label> : ""}
        <input
          type="text"
          placeholder="Password"
          {...register("password", { required: "This is Required" })}
          style={{ minWidth: "100%", height: "50px" }}
        />
        {errors.password ? <label>{errors.password.message}</label> : ""}
        <input
          type="text"
          placeholder="Name"
          {...register("name", { required: "This is Required" })}
          style={{ minWidth: "100%", height: "50px" }}
        />
        {errors.name ? <label>{errors.name.message}</label> : ""}
        <select
          name="Class"
          id="Class"
          style={{ minWidth: "100%", height: "50px" }}
          {...register("Class")}
        >
          <option value="SELECT-CLASS">SELECT CLASS</option>
          <option value="VIII">VIII</option>
          <option value="IX">IX</option>
          <option value="X">X</option>
          <option value="+1">+1</option>
          <option value="+2">+2</option>
          <option value="D1">D1</option>
          <option value="D2">D2</option>
          <option value="D3">D3</option>
        </select>
        {errors.Class ? <label>{errors.Class.message}</label> : ""}
        <h5>Choose a Photo</h5>
        <input
          type="file"
          placeholder="Photo"
          {...register("photo", { required: "This is Required" })}
          style={{ minWidth: "100%" }}
        />
        {errors.photo ? <label>{errors.photo.message}</label> : ""}

        <select
          name="union"
          id="union"
          style={{ minWidth: "100%", height: "50px" }}
          {...register("union")}
        >
          <option value="SELECT-BATCH">SELECT BATCH</option>
          <option value="FIRST">FIRST</option>
          <option value="SWALAH">SWALAH</option>
          <option value="ADAB">ADAB</option>
          <option value="IJTIMA">IJTIMA</option>
          <option value="AL-AYIN">AL-AYIN</option>
          <option value="HASANA">HASANA</option>
          <option value="MISBAH">MISBAH</option>
          <option value="ITHIFAAQ">ITHIFAAQ</option>
        </select>
        {errors.union ? <label>{errors.union.message}</label> : ""}

        <input
          type="submit"
          value="Submit"
          style={{ minWidth: "100%", height: "50px" }}
          onClick={handleSubmit(onStudentSubmit)}
        />
      </form>
    </div>
  );
}

export default AddVoter;
