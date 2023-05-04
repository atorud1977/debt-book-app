import React, { useState } from "react";
import "./FormPage.css";
const currentDate = new Date();
function FormPage({ setUsers, users, setShowForm }) {
  const [inputName, setInputName] = useState("");
  const [summa, setSumma] = useState("");
  const [product, setProduct] = useState("");

  const inputValues = inputName && summa;
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValues) {
      const newId = users.length > 0 ? users[users.length - 1].id + 1 : 1;
      const newUser = {
        id: newId,
        inputName,
        summa,
        product,
        date: currentDate.toLocaleDateString(),
        time: currentDate.toLocaleTimeString(),
      };
      setUsers([...users, newUser]);
      setInputName("");
      setSumma("");
      setProduct("");
      setShowForm(false);
      console.log(users);
    }
  };

  return (
    <div className="form">
      <h4 style={{ textAlign: "center" }}>Ro'yxatga qo'shish</h4>
      <form className="form form-login" onSubmit={handleSubmit}>
        <div className="row">
          <div className="input-field col s12 m6 offset-m3">
            <input
              type="text"
              id="text"
              name="input"
              className="validate"
              value={inputName}
              onChange={(e) => setInputName(e.target.value)}
            />
            <label htmlFor="input">Ismi:</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12 m6 offset-m3">
            <input
              type="text"
              id="newInput"
              name="newInput"
              className="validate"
              value={summa}
              onChange={(e) => setSumma(e.target.value)}
            />
            <label htmlFor="newInput">Summa:</label>
          </div>
        </div>

        <div className="row">
          <div className="input-field col s12 m6 offset-m3">
            <label htmlFor="desc">Mahsulot:</label>
            <input
              type="text"
              name="desc"
              className="validate"
              value={product}
              onChange={(e) => setProduct(e.target.value)}
            />
          </div>
        </div>
        <div className="row">
          <div className="col s6 offset-s6 col m6 offset-m4 ">
            <button
              style={{
                marginRight: "20px",
                display: "inline-block",
              }}
              className="waves-effect waves-light btn-small ml-3"
              type="submit"
              disabled={!inputValues}
            >
              Qo'shish
            </button>
            <button
              className="waves-effect waves-light red btn-small"
              type="button"
              onClick={() => setShowForm(false)}
            >
              Orqaga
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default FormPage;
