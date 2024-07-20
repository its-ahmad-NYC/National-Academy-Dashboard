import React from "react";
import "./AddButton.css";
import close from "./asstesaddbutton/close.svg";

function AddButton({ addbutton2, setaddbutton2 }) {
  return (
    <div className={addbutton2 === true ? "add-btn-001" : "add-btn-002"}>
      <div className="add-btn1">
        <div className="details-add">
          <img onClick={() => setaddbutton2(false)} src={close} alt="" />
          <div>
            <div className="add-btn-details">
              <h1>Add Subject</h1>
              <div>
                <h3>Subject Name</h3>
                <input type="text" placeholder="Enter Subject Name" />
              </div>

              <button>Add Subject</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddButton;
