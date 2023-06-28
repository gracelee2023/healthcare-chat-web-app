// on this AdminPage, we will list all the users and their roles
// we will also have a button to add, delete  and update a user

// demonstrate how to fetch data from server

import React, { useEffect, useState } from "react";
import { getUsers, createUser, deleteUser, updateUser } from "./users-service";
import { Link, useNavigate } from "react-router-dom";
import * as authService from "../../services/auth-service";

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

  const navigate = useNavigate();
  const logout = () => {
    authService.logout().then(() => navigate("/login"));
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
      <div className="wd-profile-header">
        <div className="wd-banner-photo" />
        <img src={"/images/admin.png"} className="wd-profile-photo" />
        <div className="float-end">
          <button
            type="button"
            onClick={logout}
            className="mt-2 float-end btn btn-warning rounded-pill"
          >
            Logout
          </button>
        </div>
      </div>
      <h1 style={{ color: "purple" }}>Admin Home</h1>

      <ul className="list-group">
        {/* display all users */}
        <label>List of users:</label>
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
            <p>
              <i
                className="bi bi-person-check-fill me-1"
                style={{ color: "blue" }}
              />
              User: {user.username} ({user.firstName} {user.lastName})
            </p>
            <p>
              <i className="bi bi-envelope me-1" style={{ color: "blue" }} />
              Email: {user.email}
            </p>
            <p>
              <i className="bi bi-tag me-1" style={{ color: "blue" }} />
              Account Type: {user.accountType}
            </p>
            <p>
              <i className="bi bi-calendar me-1" style={{ color: "red" }} />
              Joined Date: {user.joined}
            </p>
            <p>
              <i className="bi bi-heart-fill me-1" style={{ color: "red" }} />
              followings: {user.followings}, followers: {user.followers}
            </p>
          </li>
        ))}

        <li className="list-group-item">
          <label>CRUD:</label>
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
      </ul>

      {/* <pre>
        <code>{JSON.stringify(users, null, 2)}</code>
      </pre> */}
    </div>
  );
}

export default AdminPage;
