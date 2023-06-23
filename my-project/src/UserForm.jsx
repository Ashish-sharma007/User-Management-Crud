import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const UserForm = ({ addUser }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form validation here
    // ...

    const newUser = {
      id: uuidv4(),
      name,
      email,
      phone
    };

    addUser(newUser);

    setName('');
    setEmail('');
    setPhone('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 ">
      <div className="mb-4">
        <label htmlFor="name" className="block text-black text-sm font-bold mb-1">
          Name
        </label>
        <input
          type="text"
          id="name"
          className="w-full px-3 py-2 border border-blue-300  bg-gray-200 rounded focus:outline-none focus:border-blue-500"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-black text-sm font-bold mb-1">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="w-full px-3 py-2 border border-blue-300 bg-gray-200 rounded focus:outline-none focus:border-blue-500"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="phone" className="block  text-black text-sm font-bold mb-1">
          Phone
        </label>
        <input
          type="tel"
          id="phone"
          className="w-full px-3 py-2 border border-blue-300  bg-gray-200 rounded focus:outline-none focus:border-blue-500"
          placeholder="Enter phone number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Add User
      </button>
    </form>
  );
};

export default UserForm;
