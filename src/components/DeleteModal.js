import React from "react";

function DeleteModal({ setShowDeleteModal, confirmDelete }) {
  return (
    <div className="overlay">
      <div className="modal-content">
        <div className="modal-header">
          <p> ni oʻchirib tashlamoqchimisiz?</p>
          <button
            className="waves-effect waves-light green btn-small"
            onClick={() => setShowDeleteModal(false)}
          >
            Orqaga
          </button>
          <button
            className="waves-effect waves-light red btn-small"
            onClick={confirmDelete}
          >
            O'chirish
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteModal;
