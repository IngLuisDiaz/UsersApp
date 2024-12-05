import PropTypes from "prop-types";
import { UserRow } from "./UserRow";

export const UsersList = ({ users = [], onUpdateUser, onRemoveUser }) => {
  return (
    <table className="table table-hover table-striped">
      <thead>
        <tr>
          <th>#</th>
          <th>Username</th>
          <th>Email</th>
          <th>Update</th>
          <th>Remove</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <UserRow
            key={user.id} // Usar el ID como clave única
            index={index}
            username={user.username}
            email={user.email}
            onUpdateUser={onUpdateUser} // Pasar la función de actualización
            onRemoveUser={onRemoveUser} // Pasar la función de eliminación
          />
        ))}
      </tbody>
    </table>
  );
};

UsersList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      username: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
    })
  ).isRequired,
  onUpdateUser: PropTypes.func.isRequired,
  onRemoveUser: PropTypes.func.isRequired,
};
