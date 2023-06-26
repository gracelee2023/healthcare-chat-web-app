// on this AdminPage, we will list all the users and their roles
// we will also have a button to add, delete  and update a user

// demonstrate how to fetch data from server

import React, { useEffect, useState } from "react";
import { getUsers, createUser, deleteUser, updateUser } from "./users-service";

function AdminPage() {
  const [users, setUsers] = useState([]);
  // create a new user
  const [newUser, setNewUser] = useState({
    firstName: "",
    lastName: "",
  });
  // handle to create a new user
  const handleCreateUser = async () => {
    const user = await createUser(newUser);
    setUsers([...users, user]);
    setNewUser({});
  };

  // handle to delete a user
  const handleDeleteUser = async (id) => {
    try {
      await deleteUser(id);
      const newUsers = users.filter((user) => user._id !== id);
      setUsers(newUsers);
    } catch (error) {
      console.error(error);
    }
  };

  // handle to update a user
  const handleUpdateUser = async () => {
    // export const updateUser = async (id, user) => { in users-service.js passing in id and user
    const user = await updateUser(newUser._id, newUser);
    setUsers(users.map((user) => (user._id === newUser._id ? newUser : user)));
  };

  // when click the Edit button, passing in user, then copies all the user's data to the newUser input box
  const handleEditUser = async (user) => {
    setNewUser(user);
  };

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await getUsers();
      setUsers(users);
    };
    // if we don't call fetchUsers() here, then the left side of the screen is not inquiring the data from the server
    fetchUsers();
  }, []);
  return (
    <div>
      <h1>Admin Home</h1>

      <ul className="list-group">
        <li className="list-group-item">
          {/* create a update button */}
          <button
            onClick={() => handleUpdateUser()}
            className="btn btn-success float-end"
          >
            Update
          </button>

          {/* create a new user */}
          <button
            onClick={handleCreateUser}
            className="btn btn-primary float-end"
          >
            Create
          </button>
          {/* type username in the input box */}
          <input
            value={newUser.username}
            // when typing, we spread the old user and update the first name
            onChange={(e) =>
              setNewUser({ ...newUser, username: e.target.value })
            }
            className="form-control w-50"
            placeholder="username"
          />
          {/* type password in the input box */}
          <input
            value={newUser.password}
            type="password"
            // when typing, we spread the old user and update the first name
            onChange={(e) =>
              setNewUser({ ...newUser, password: e.target.value })
            }
            className="form-control w-50"
            placeholder="password"
          />
          {/* first name input box */}
          <input
            value={newUser.firstName}
            // when typing, we spread the old user and update the first name
            onChange={(e) =>
              setNewUser({ ...newUser, firstName: e.target.value })
            }
            className="form-control w-75"
            placeholder="First Name"
          />
          {/* last name input box */}
          <input
            value={newUser.lastName}
            // when typing, we spread the old user and update the first name
            onChange={(e) =>
              setNewUser({ ...newUser, lastName: e.target.value })
            }
            className="form-control w-50"
            placeholder="Last Name"
          />
        </li>

        {/* display all users */}
        {users.map((user) => (
          <li className="list-group-item" key={user._id}>
            {/* put a edit buttion to each user */}
            <button
              onClick={() => handleEditUser(user)}
              className="btn btn-warning float-end"
            >
              Edit
            </button>
            {/* put a delete buttion to each user */}
            <button
              onClick={() => handleDeleteUser(user._id)}
              className="btn btn-danger float-end"
            >
              Delete
            </button>
            {user.firstName} {user.lastName}
          </li>
        ))}
      </ul>

      <pre>
        <code>{JSON.stringify(users, null, 2)}</code>
      </pre>
    </div>
  );
}

export default AdminPage;
