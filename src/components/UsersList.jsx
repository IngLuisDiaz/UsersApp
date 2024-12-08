import PropTypes from "prop-types";
import { UserRow } from "./UserRow";

export const UsersList = ({ users = [], onUpdateUser, onRemoveUser, onEditUser }) => {
  return (

    <div>
        {users.length === 0? (<p className="text-center text-muted"> No hay usuros existentes</p>
        ):(
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
            {...user}
            onUpdateUser={onUpdateUser} // Pasar la función de actualización
            onRemoveUser={onRemoveUser} // Pasar la función de eliminación
            onEditUser={onEditUser} //pasar elusuario para editar
          />
        ))}
      </tbody>
    </table>
    )}
    </div>
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
  onEditUser: PropTypes.func.isRequired,
};
