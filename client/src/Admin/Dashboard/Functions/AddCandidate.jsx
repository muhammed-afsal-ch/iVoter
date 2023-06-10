import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

function AddCandidate() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onStudentSubmit = (data) => {
    console.log(data);

    const formdata = new FormData();
    formdata.append("symbol", data.logo[0], data.candidate_id);

    axios
      .post("/api/2175/admin/addcandidate", data)
      .then((res) => {
        console.log(res.data);
        if (res.data.CandidateAddStatus === "CANDIDATE_ADDED_SUCCESSFULLY") {
          axios.post("/api/2175/symbol", formdata).then((res) => {
            if (res.data.CandidateAddStatus === "CANDIDATE_PHOTO_ADDED_SUCCESSFULLY") {
              Swal.fire("Congrats", "Candidate Added Successfully", "success");
            } else {
              Swal.fire("Faild", "Something went wrong!", "info");
            }
          });
        } else if (res.data.CandidateAddStatus === "CANDIDATE_ALREADY_REGISTERD") {
          Swal.fire("Faild", "Candidate Already Registered!", "warning");
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
      <h1>Add Candidate</h1>
      <form id="addStudent">
        <input
          type="number"
          placeholder="candidate_id"
          {...register("candidate_id", { required: "This is Required" })}
          style={{ minWidth: "100%", height: "50px" }}
        />
        {errors.candidate_id ? <label>{errors.candidate_id.message}</label> : ""}
        <input
          type="text"
          placeholder="Full Name"
          {...register("fullname", { required: "This is Required" })}
          style={{ minWidth: "100%", height: "50px" }}
        />
        {errors.fullname ? <label>{errors.fullname.message}</label> : ""}
        <input
          type="text"
          placeholder="Place"
          {...register("place", { required: "This is Required" })}
          style={{ minWidth: "100%", height: "50px" }}
        />
        {errors.place ? <label>{errors.place.message}</label> : ""}

        <select
          name="Position"
          id="Position"
          style={{ minWidth: "100%", height: "50px" }}
          {...register("position")}
        >
          <option value="SELECT-POSITION">SELECT POSITION</option>
          <option value="PRESIDENTIAL">PRESIDENTIAL</option>
          <option value="SECRETARIAL">SECRETARIAL</option>
          <option value="VICE-PRESIDENTIAL">VICE PRESIDENTIAL</option>
          <option value="TREASURER">TREASURER</option>
        </select>
        {errors.position ? <label>{errors.position.message}</label> : ""}
        <h5>Choose a Symbol</h5>
        <input
          type="file"
          placeholder="Logo"
          {...register("logo", { required: "This is Required" })}
          style={{ minWidth: "100%" }}
        />
        {errors.logo ? <label>{errors.logo.message}</label> : ""}

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

export default AddCandidate;
