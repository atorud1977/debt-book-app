import React, { useState, useEffect } from "react";

import "./MainPage.css";
import FormPage from "./FormPage";
import TotalSumma from "./TotalSumma";
import TableHead from "./TableHead";
import EditModal from "./EditModal";
import TableModal from "./TableModal";
import TableList from "./TableList";
import DeleteModal from "./DeleteModal";
const currentDate = new Date();
const getDatafromLS = () => {
  const data = localStorage.getItem("users");
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};

function MainPage() {
  const [users, setUsers] = useState(getDatafromLS());
  const [editingUser, setEditingUser] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [userData, setUserData] = useState([]);
  const [showData, setShowData] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteIndex, setDeleteIndex] = useState(null);
  ////////////TotalSum///////
  function calculateTotal() {
    const total = users.reduce((acc, user) => {
      const str = user.summa;
      if (str) {
        const numbers = str.replace(/\+/g, " ").split(" ").map(Number);
        const sum = numbers.reduce((a, b) => a + b);
        return acc + sum;
      }
      return acc;
    }, 0);

    return total;
  }

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);
  //////Deleted/////
  const handleDelete = (id) => {
    setDeleteIndex(id);
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    const updatedUsers = users.filter((user) => user.id !== deleteIndex);
    setUsers(updatedUsers);
    setShowDeleteModal(false);
  };

  //// Edit////
  const handleEdit = (user) => {
    setEditingUser(user);
  };

  // const handleUpdate = (updatedUser) => {
  //   const updatedUsers = users.map((user) => {
  //     if (user.id === updatedUser.id) {
  //       return updatedUser;
  //     }
  //     return user;
  //   });
  //   setUsers(updatedUsers);
  //   setEditingUser(null);
  // };

  const handleUpdate = (updatedUser) => {
    const date = currentDate.toLocaleDateString();
    const updatedUserWithDate = {
      ...updatedUser,
      date: date,
    };
    const updatedUsers = users.map((user) => {
      if (user.id === updatedUser.id) {
        return updatedUserWithDate;
      }
      return user;
    });
    setUsers(updatedUsers);
    setEditingUser(null);
  };

  ///////Search/////
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const filteredUsers = users.filter((user) =>
    user.inputName.toUpperCase().includes(searchTerm.toUpperCase())
  );

  ///// UserData////

  const showUserData = (id) => {
    const userId = users.findIndex((user) => user.id === id);
    const newUsers = [...users];
    setUserData(newUsers[userId]);
    setShowData(true);
  };

  return (
    <div className="wrapper">
      <div className="main-page">
        {!editingUser && showForm ? (
          <FormPage
            setUsers={setUsers}
            users={users}
            setShowForm={setShowForm}
            showForm={showForm}
          />
        ) : null}
        {!showForm && (
          <div className="users">
            <div className="row">
              <TotalSumma
                calculateTotal={calculateTotal}
                setShowForm={setShowForm}
                handleChange={handleChange}
                searchTerm={searchTerm}
              />
            </div>
            {showData && (
              <TableModal userData={userData} setShowData={setShowData} />
            )}

            {showDeleteModal && (
              <DeleteModal
                users={users}
                deleteIndex={deleteIndex}
                setShowDeleteModal={setShowDeleteModal}
                confirmDelete={confirmDelete}
              />
            )}
            <table className="highlight">
              <TableHead />
              <TableList
                filteredUsers={filteredUsers}
                showUserData={showUserData}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
              />
            </table>
          </div>
        )}
      </div>
      {editingUser && (
        <EditModal
          user={editingUser}
          handleUpdate={handleUpdate}
          setEditingUser={setEditingUser}
        />
      )}
    </div>
  );
}

export default MainPage;
