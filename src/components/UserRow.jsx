import PropTypes from "prop-types";
import { useState } from "react";

export const UserRow = ({
  id,
  index,
  username,
  password,
  email,
  onRemoveUser,
  onSaveUser,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState({ username, password, email });

  // Manejo de cambios en los campos
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedUser({ ...editedUser, [name]: value });
  };

  // Guardar los cambios realizados en la edición
  const handleSave = () => {
    onSaveUser(id, editedUser);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedUser({ username, password, email });
    setIsEditing(false);
  };

  return (
    <tr>
      <td>{index + 1}</td>
      <td>
        {isEditing ? (
          <input
            type="text"
            name="username"
            value={editedUser.username}
            onChange={handleInputChange}
            className="form-control form-control-sm"
          />
        ) : (
          username
        )}
      </td>
      <td>
        {isEditing ? (
          <input
            type="password"
            name="password"
            value={editedUser.password}
            onChange={handleInputChange}
            className="form-control form-control-sm"
          />
        ) : (
          "******"
        )}
      </td>
      <td>
        {isEditing ? (
          <input
            type="email"
            name="email"
            value={editedUser.email}
            onChange={handleInputChange}
            className="form-control form-control-sm"
          />
        ) : (
          email
        )}
      </td>
      <td>
        <div className="d-flex gap-2 justify-content-center">
          {isEditing ? (
            <>
              <button
                type="button"
                className="btn btn-success btn-sm"
                onClick={handleSave}
              >
                Guardar
              </button>
              <button
                type="button"
                className="btn btn-secondary btn-sm"
                onClick={handleCancel}
              >
                Cancelar
              </button>
            </>
          ) : (
            <>
              <button
                type="button"
                className="btn btn-primary btn-sm"
                onClick={() => setIsEditing(true)}
              >
                Editar
              </button>
              <button
                type="button"
                className="btn btn-danger btn-sm"
                onClick={() => onRemoveUser(id)}
              >
                Eliminar
              </button>
            </>
          )}
        </div>
      </td>
    </tr>
  );
};

UserRow.propTypes = {
  id: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  onRemoveUser: PropTypes.func.isRequired,
  onSaveUser: PropTypes.func.isRequired,
};
