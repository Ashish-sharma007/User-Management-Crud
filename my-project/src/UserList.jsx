import React from 'react';

const UserList = ({ users, deleteUser, editUser }) => {
  return (
    <div>
    <div className='flex justify-around  border-blue-300 bg-gray-400 pt-2 text-black
    '>
      <h2 className="text-lg font-bold mb-2 px-2">Name</h2>
      <h2 className="text-lg font-bold mb-2">Email Id</h2>
      <h2 className="text-lg font-bold mb-2">Phone </h2>
      <h2 className="text-lg font-bold mb-2">Edit/ Delete </h2>
      </div>

      {users.length === 0 ? (
        <p className='text-white text-center p-4'>No user found</p>
      ) : (
 
        <ul className="grid grid-cols-1 gap-4">
          {users.map((user) => (
            <li key={user.id} className="border-blue-300 bg-zinc-200 text-black p-2">
   
             <div className='flex justify-around items-center  '>
              <h3 className="text-lg font-bold mb-2"> {user.name}</h3>
              <p>{user.email}</p>
              <p> {user.phone}</p>
             
              <div className="mt-4">
                <button
                  onClick={() => editUser(user)}
                  className="bg-green-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteUser(user.id)}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Delete
                </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UserList;
