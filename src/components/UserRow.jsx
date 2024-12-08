import PropTypes from "prop-types";

export const UserRow = ({ id, index, username, email, onRemoveUser, onEditUser }) => {
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{username}</td>
      <td>{email}</td>
      <td>
        <button
          type="button"
          className="btn btn-secondary btn-sm"
          onClick={onEditUser} // Llamar a la función de actualización
        >
          Actualizar
        </button>
      </td>
      <td>
        <button
          className="btn btn-danger btn-sm"
          onClick={() => onRemoveUser(id)} // Llamar a la función de eliminación
        >
          Eliminar
        </button>
      </td>
    </tr>
  );
};

UserRow.propTypes = {
  id: PropTypes.number.isRequired, // El id del usuario
  index: PropTypes.number.isRequired,
  username: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  onUpdateUser: PropTypes.func.isRequired,
  onRemoveUser: PropTypes.func.isRequired,
  onEditUser: PropTypes.func.isRequired, // Función para abrir el modal de edición
};
