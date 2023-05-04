import React from "react";
import SearchBox from "./SearchBox";
import "./TotalSumma.css";

function TotalSumma({ calculateTotal, setShowForm, handleChange, searchTerm }) {
  return (
    <div className="fixed-block">
      <div className="title">
        {isNaN(calculateTotal()) ? (
          <h4>To'gri malumot kiriting!</h4>
        ) : (
          <h4 style={{ color: "black" }}>
            Umumiy summa:
            <span style={{ color: "red" }}>
              {calculateTotal().toLocaleString()}
            </span>
            so'm
          </h4>
        )}
      </div>

      <div>
        <SearchBox handleChange={handleChange} searchTerm={searchTerm} />
      </div>
      <div>
        <button
          className="btn-floating  waves-effect waves-light blue"
          onClick={() => setShowForm(true)}
        >
          <i className="material-icons">add</i>
        </button>
      </div>
    </div>
  );
}

export default TotalSumma;
