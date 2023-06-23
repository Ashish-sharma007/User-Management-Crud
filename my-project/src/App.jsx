import React, { useState } from 'react';
import UserForm from './UserForm';
import UserList from './UserList';
import UserModal from './UserModal';
import { dummyData } from './data';

const App = () => {
  const [users, setUsers] = useState(dummyData);
  const [editingUser, setEditingUser] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  // Function to add a new user
  const addUser = (user) => {
    setUsers([user,...users]);
  };

  // Function to delete a user
  const deleteUser = (userId) => {
    setUsers(users.filter((user) => user.id !== userId));
  };

  // Function to edit a user
  const editUser = (user) => {
    setEditingUser(user);
    setModalOpen(true);
  };

  // Function to update a user
  const updateUser = (updatedUser) => {
    setUsers(users.map((user) => (user.id === updatedUser.id ? updatedUser : user)));
    setEditingUser(null);
    setModalOpen(false);
  };

  return (
    <div className="container mx-auto p-4 ">
      <h1 className="text-2xl font-bold mb-4 bg-zinc-400 text-black text-center shadow-lg rounded-lg p-4">User Management Application</h1>
      <UserForm addUser={addUser} />
     
      <UserList users={users} deleteUser={deleteUser} editUser={editUser} />
      {modalOpen && (
        <UserModal user={editingUser} updateUser={updateUser} closeModal={() => setModalOpen(false)} />
      )}
      
    </div>
  );
};

export default App;
