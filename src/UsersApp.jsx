import { UserForm } from "./components/UserForm";
import { UsersList } from "./components/UsersList";
import { useState } from "react";

export const UsersApp = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      username: "Luis Diaz",
      password: "12345",
      email: "luis@example.com",
    },
  ]);

  const addUser = (newUser) => {
    setUsers((prevUsers) => [
      ...prevUsers,
      { ...newUser, id: prevUsers.length + 1 },
    ]);
  };

  // Función para manejar la actualización de un usuario
  const handleUpdateUser = (userId) => {
    const updatedUsers = users.map((user) =>
      user.id === userId
        ? { ...user, username: `${user.username} (updated)` } // Lógica de actualización (aquí como ejemplo)
        : user
    );
    setUsers(updatedUsers);
    console.log(`Usuario con ID ${userId} actualizado`);
  };

  // Función para manejar la eliminación de un usuario
  const handleRemoveUser = (userId) => {
    const filteredUsers = users.filter((user) => user.id !== userId);
    setUsers(filteredUsers);
    console.log(`Usuario con ID ${userId} eliminado`);
  };

  return (
    <div className="container my-4">
      <h2>Users App</h2>
      <div className="row">
        <div className="col">
            <p>Frmulario</p>
            <UserForm onAddUser={addUser} 
            />
        </div>
        <div className="col">
        <UsersList
          users={users}
          onUpdateUser={handleUpdateUser}
          onRemoveUser={handleRemoveUser}
        />
        </div>
      </div>
    </div>
  );
};
