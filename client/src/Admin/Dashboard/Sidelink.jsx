import React from "react";
import { useNavigate } from "react-router-dom";
import "./Sidelink.css";

function Sidelink(props) {
  const navigate = useNavigate();

  return (
    <div>
      <div>
        <li
          className="li"
          style={{
            listStyle: "none",
            color: "white",
            padding: "30px",
          }}
          onClick={() => navigate(`./${props.val}`)}
        >
          {props.val}
        </li>
      </div>
    </div>
  );
}

export default Sidelink;
