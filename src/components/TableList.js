import React from "react";

function TableList({ filteredUsers, showUserData, handleEdit, handleDelete }) {
  return (
    <tbody>
      {filteredUsers.map((user, index) => {
        return (
          <tr key={index}>
            <td>{index + 1}</td>
            <td className="td" onClick={() => showUserData(user.id)}>
              {user.inputName.charAt(0).toUpperCase() + user.inputName.slice(1)}
            </td>
            <td>{user.summa}</td>
            <td>{user.product}</td>
            <td> {user.date}</td>
            <td>{user.time}</td>
            <td>
              <button
                className="waves-effect waves-light orange btn-small"
                onClick={() => handleEdit(user)} // set the user to be edited
              >
                Tahrirlash
              </button>
            </td>
            <td>
              <button
                className="waves-effect waves-light red btn-small"
                onClick={() => handleDelete(user.id)}
              >
                O'chirish
              </button>
            </td>
          </tr>
        );
      })}
    </tbody>
  );
}

export default TableList;
