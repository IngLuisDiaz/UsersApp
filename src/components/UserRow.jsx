import PropTypes from "prop-types";

export const UserRow = ({ index, username, email, onUpdateUser, onRemoveUser }) => {
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{username}</td>
      <td>{email}</td>
      <td>
        <button
          type="button"
          className="btn btn-secondary btn-sm"
          onClick={() => onUpdateUser(index)} // Llamar a la función de actualización
        >
          Update
        </button>
      </td>
      <td>
        <button
          className="btn btn-danger btn-sm"
          onClick={() => onRemoveUser(index)} // Llamar a la función de eliminación
        >
          Remove
        </button>
      </td>
    </tr>
  );
};

UserRow.propTypes = {
  index: PropTypes.number.isRequired,
  username: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  onUpdateUser: PropTypes.func.isRequired,
  onRemoveUser: PropTypes.func.isRequired,
};
