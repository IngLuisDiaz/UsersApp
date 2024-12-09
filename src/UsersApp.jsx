import { useReducer, useState } from "react";
import { UserForm } from "./components/UserForm";
import { UsersList } from "./components/UsersList";
import { usersReducer } from "./reducers/usersReducers";

export const UsersApp = () => {
  const initialUsers = [
    {
      id: 1,
      username: "Luis Diaz",
      password: "12345",
      email: "luis@example.com",
    },
  ];

  // useReducer para manejar el estado de los usuarios
  const [users, dispatch] = useReducer(usersReducer, initialUsers);
  const [editingUser, setEditingUser] = useState(null);

  // Función para manejar la edición de un usuario
  const handleEditUser = (user) => {
    setEditingUser(user); // Cargar el usuario seleccionado en el formulario
  };

  // Función para agregar o actualizar usuarios
  const handleSaveUser = (user) => {
    if (editingUser) {
      // Si estamos editando, actualizamos
      dispatch({ type: "UPDATE_USER", payload: user });
      setEditingUser(null); // Limpiar el estado de edición
    } else {
      // Si no estamos editando, agregamos
      dispatch({ type: "ADD_USER", payload: { ...user, id: users.length + 1 } });
    }
  };

  // Función para eliminar un usuario
  const handleRemoveUser = (userId) => {
    dispatch({ type: "REMOVE_USER", payload: userId });
  };

  // Función para manejar la actualización directa de un usuario en la lista
  const handleUpdateUser = (updatedUser) => {
    dispatch({ type: "UPDATE_USER", payload: updatedUser });
  };

  return (
    <div className="container my-4">
      <h2>Users App</h2>
      <div className="row">
        <div className="col">
          <UserForm
            onSaveUser={handleSaveUser} // Manejar agregar o actualizar
            editingUser={editingUser} // Usuario que se está editando
          />
        </div>
        <div className="col">
          <UsersList
            users={users} // Lista de usuarios actualizada
            onRemoveUser={handleRemoveUser} // Eliminar usuario
            onUpdateUser={handleUpdateUser} // Actualizar usuario directamente en la lista
            onEditUser={handleEditUser} // Cargar usuario en el formulario para editar
          />
        </div>
      </div>
    </div>
  );
};
