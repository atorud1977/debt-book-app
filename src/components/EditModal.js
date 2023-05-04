import React, { useState } from "react";
import "./EditModal.css";

function EditModal({ user, handleUpdate, setEditingUser }) {
  const currentData = new Date();
  const updateData = currentData.toLocaleDateString();
  const updateTime = currentData.toLocaleTimeString();
  const [updatedUser, setUpdatedUser] = useState({
    inputName: user.inputName,
    summa: user.summa,
    product: user.product,
    date: updateData,
    time: updateTime,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    handleUpdate({ ...user, ...updatedUser });
  };

  return (
    <div className="overlay">
      <div className="popup">
        <h4>Tahrirlash</h4>
        <form onSubmit={handleSubmit}>
          <div className="input-field col s12 m6 offset-m3">
            <input
              type="text"
              value={updatedUser.inputName}
              className="validate"
              onChange={(event) =>
                setUpdatedUser({
                  ...updatedUser,
                  inputName: event.target.value,
                })
              }
            />
            <label className="active" htmlFor="inputName">
              Ismi
            </label>
          </div>
          <div className="input-field col s12 m6 offset-m3">
            <input
              type="text"
              value={updatedUser.summa}
              className="validate"
              onChange={(event) =>
                setUpdatedUser({
                  ...updatedUser,
                  summa: event.target.value,
                })
              }
            />
            <label className="active" htmlFor="summa">
              Summa
            </label>
          </div>
          <div className="input-field col s12 m6 offset-m3">
            <input
              type="text"
              value={updatedUser.product}
              className="validate"
              onChange={(event) =>
                setUpdatedUser({
                  ...updatedUser,
                  product: event.target.value,
                })
              }
            />
            <label className="active" htmlFor="product">
              Maxsulot
            </label>
          </div>
          <div className="modal-footer">
            <button
              className="waves-effect waves-light green btn-small "
              type="submit"
            >
              Tahrirlash
            </button>
            <button
              className="waves-effect waves-light red btn-small"
              onClick={() => setEditingUser(null)}
            >
              Orqaga
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditModal;
