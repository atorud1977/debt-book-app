import React from "react";
import "./TableModal.css";

function TableModal({ userData, setShowData }) {
  console.log(userData);
  return (
    <>
      <div id="overlay">
        <div id="popup">
          <div className="content">
            <div style={{ textAlign: "center", marginTop: "0" }}>
              {userData.inputName.toUpperCase()}
            </div>
            <div>
              {" "}
              <span> Summa: </span> {userData.summa}
            </div>
            <div>
              <span>Mahsulot:</span>{" "}
              {userData.product === "" ? "------" : userData.product}
            </div>
            <div className="date">
              {" "}
              <span>Sana:</span>
              {userData.date}
            </div>
            <div className="time">
              {" "}
              <span>Vaqt:</span>
              {userData.time}
            </div>
            <div style={{ textAlign: "center" }}>
              <button
                onClick={() => setShowData(false)}
                className="waves-effect waves-light red btn-small"
              >
                Orqaga
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TableModal;
